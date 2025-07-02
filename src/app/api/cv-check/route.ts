import { NextResponse } from 'next/server';
import { readdir } from 'fs/promises';
import { join } from 'path';

export async function GET() {
    try {
        const publicDir = join(process.cwd(), 'public');
        const files = await readdir(publicDir);

        // Look for any PDF file that contains "CV" in the name (case insensitive)
        const cvFile = files.find(file =>
            file.toLowerCase().includes('cv') &&
            file.toLowerCase().endsWith('.pdf')
        );

        if (cvFile) {
            // Check if the file is actually a PDF by reading its first few bytes
            const fs = await import('fs/promises');
            const filePath = join(publicDir, cvFile);
            const buffer = await fs.readFile(filePath);

            // Check if it starts with PDF magic number (%PDF)
            const isPDF = buffer.length > 4 &&
                buffer[0] === 0x25 && // %
                buffer[1] === 0x50 && // P
                buffer[2] === 0x44 && // D
                buffer[3] === 0x46;   // F

            if (isPDF && buffer.length > 1000) { // Also check minimum size
                return NextResponse.json({
                    exists: true,
                    filename: cvFile,
                    size: buffer.length
                });
            }
        }

        return NextResponse.json({ exists: false });
    } catch (error) {
        console.error('Error checking for CV files:', error);
        return NextResponse.json({ exists: false, error: 'Failed to check files' });
    }
} 