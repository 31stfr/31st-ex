'use client';

import { H6 } from '@/components/common/Heading';
import { PropClassName } from '@/types/typesGlobal';
import { twMerge } from 'tailwind-merge';
import BadUserCard from './BadUserCard';
import UserCard from './UserCard';

const CompoundComponentsExample = ({ className }: PropClassName) => {
    const name = 'Blue eyes cat' as const;

    const description =
        `A blue-eyed feline diva, equal parts cuddle machine and professional napper. Loves shrimp like it's fine dining, practices "cat yoga" (mostly lying on the mat), and alternates between chasing shadows and pretending to be too sophisticated for such nonsense.` as const;

    const skills = ['Deep sleep', 'Yoga', 'Meow', 'Purr', 'Scare away dogs'] as const;

    const image = {
        src: '/assets/ex/31st_ex_cat.png',
        alt: 'The cat',
    } as const;

    return (
        <div className={twMerge('grid lg:grid-cols-[1fr_3fr] gap-4', className)}>
            <div>
                <H6>Average implementation</H6>
                <p className="text-neutral-500">
                    A card with a monolithic implementation of the custom component. There's no easy
                    way to change the placement of the content elements.
                </p>
            </div>
            <div>
                <H6>Better implementation</H6>
                <p className="text-neutral-500">
                    A card with an implementation offering flexibility in usage, where each
                    sub-element is optional, customizable, and can be placed anywhere.
                </p>
            </div>
            <div className="p-0.5 pr-2 pb-2 rounded-xl bg-linear-to-br from-orange-300 to-rose-400">
                <div className="h-full w-full p-4 rounded-lg bg-white">
                    <BadUserCard
                        name={name}
                        imageAlt={image.alt}
                        imageSrc={image.src}
                        description={description}
                        skills={[...skills]}
                        className="h-fit"
                    />
                </div>
            </div>
            <div className="p-0.5 pr-2 pb-2 rounded-xl bg-linear-to-br from-orange-300 to-rose-400">
                <div className="h-full w-full grid lg:grid-cols-3 place-items-start gap-4 p-4 rounded-lg bg-white">
                    <UserCard>
                        <UserCard.Image src={image.src} alt={image.alt} />
                        <UserCard.Name>{name}</UserCard.Name>
                        <div className="grid grid-cols-[1fr_auto] gap-4">
                            <UserCard.Description>{description}</UserCard.Description>
                            <UserCard.Skills skills={[...skills]} className="flex-1" />
                        </div>
                    </UserCard>
                    <UserCard>
                        <UserCard.Image src={image.src} alt={image.alt} className="ml-auto" />
                        <UserCard.Name>{name}</UserCard.Name>
                        <UserCard.Description>{description}</UserCard.Description>
                    </UserCard>
                    <UserCard className="w-full">
                        <UserCard.Name>{name}</UserCard.Name>
                        <UserCard.Image
                            src={image.src}
                            alt={image.alt}
                            className="max-w-16 max-h-16 ml-auto"
                        />
                        <div className="grid grid-cols-2 gap-4">
                            <UserCard.Description>{description}</UserCard.Description>
                            <UserCard.Skills skills={[...skills]} />
                        </div>
                    </UserCard>
                    <UserCard>
                        <UserCard.Image
                            src={image.src}
                            alt={image.alt}
                            className="max-w-16 max-h-16 rounded-full"
                        />
                        <UserCard.Name>{name}</UserCard.Name>
                        <UserCard.Description>{description}</UserCard.Description>
                        <UserCard.Skills skills={[...skills]} />
                    </UserCard>
                    <UserCard className="items-end">
                        <UserCard.Name>{name}</UserCard.Name>
                        <UserCard.Image src={image.src} alt={image.alt} />
                    </UserCard>
                    <UserCard className=" flex-col">
                        <UserCard.Name>{name}</UserCard.Name>
                        <UserCard.Description>{description}</UserCard.Description>
                        <div className="grid grid-cols-[1fr_auto] gap-4">
                            <UserCard.Image
                                src={image.src}
                                alt={image.alt}
                                className="rounded-tl-4xl rounded-br-4xl"
                            />
                            <UserCard.Skills skills={[...skills]} className="flex-1" />
                        </div>
                    </UserCard>
                </div>
            </div>
        </div>
    );
};

export default CompoundComponentsExample;
