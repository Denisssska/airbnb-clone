'use client';
import React from 'react';
import Image from "next/image";

interface AvatarProps {
    image: string | null | undefined
}

const Avatar: React.FC<AvatarProps> = ({image}) => {
    return (
        <div>
            <Image className={'rounded-full'} height={'30'} width={'30'} alt={'Avatar'}
                   src={image || '/images/placeholder.jpg'}/>
        </div>
    );
};

export default Avatar;