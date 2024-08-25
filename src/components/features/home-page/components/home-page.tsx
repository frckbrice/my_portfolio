
// components
import { DownloadIcon } from "lucide-react";
import { Button } from '@/components/ui/button';
export interface IHomepageProps {
    Socials: () => React.ReactElement;
    Photos: () => React.ReactElement;
    Stats: () => React.ReactElement;
}

export function Homepage({ Socials, Photos, Stats }: IHomepageProps) {
    return (
        <section className=' w-full'>
            <div className=' container mx-auto h-full'>
                <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8:pb-24'>
                    {/* text */}
                    <div className=' text-center xl:text-left order-2 xl:order-none'>
                        <span>Software developer</span>
                        <h1 className=' h1 mb-6 '>Hello! I'm <br />
                            <span className=' text-accent'>AVOM Brice</span>
                        </h1>
                        <p className=' max-w-[500px] mb-9 text-white/80'>
                            I excel at crafting  elegant digital experience  and I am proficient in JavaSript and typeScript Programming languages and Frameworks.
                        </p>
                        {/* button and socials */}
                        <div className=' flex flex-col gap-8 xl:flex-row items-center '>
                            <Button variant={"outline"} size={"lg"} className=' uppercase flex items-center gap-2'>
                                <span> Download <span className='ml-2 text-xl'>CV</span></span>
                                <DownloadIcon className='ml-4' size={22} />
                            </Button>
                            <div className=' mb-8 xl:mb-0'>
                                <Socials />
                            </div>
                        </div>
                    </div>
                    {/* image */}
                    <div className=" order-1 xl:order-none mb-8 xl:mb-0">
                        <Photos />
                    </div>
                </div>
            </div>
            {/* statistiques */}
            <Stats />
        </section>
    );
}
