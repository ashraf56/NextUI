'use client'
import { Avatar, Button, Card, CardBody, Textarea } from '@nextui-org/react';
import { Input } from "@nextui-org/react";
import React, { useState } from 'react';

const Profile = () => {
    const [isEditable, setIsEditable] = useState(false);

    const handleUpdateProfile = () => {
        setIsEditable(!isEditable); // Toggle the isEditable state
    };
    return (
        <div className='max-w-3xl w-full py-5'>
            {/* name , date of birth, education, profile pic, bio and location , GitHub link and other portfolio website */}

            <Card className=''>

                <CardBody>
                    <div className='bg-gradient-to-r from-[#ff1b6b] to-[#45caff] w-full h-28  rounded-b-2xl'>

                    </div>
                    <div className='mx-auto  mb-2 -mt-14 '>
                        <Avatar isBordered color="primary" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" className="w-24 h-24 text-large " />
                    </div>


                    <div className='pb-1 text-center'>
                        <p className='text-2xl font-bold  pb-2 '>Joshua Adams</p>


                    </div>

                    <div className='flex justify-center gap-3 flex-col items-center pt-3'>
                        <Textarea
                            readOnly={!isEditable}
                            variant={!isEditable ? ' ' : 'bordered'}
                            label="Bio"
                            labelPlacement="inside"
                            placeholder="Enter your description"
                            defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s"
                            className="max-w-xl"
                        />
                        <Input
                            readOnly={!isEditable}
                            variant={!isEditable ? ' ' : 'bordered'}
                            type="text"
                            label="Location"
                            size='md'
                            defaultValue="Panjab,India"
                            className="max-w-xl "
                        />
                        <Input
                            readOnly={!isEditable}
                            variant={!isEditable ? ' ' : 'bordered'}
                            type="email"
                            label="Email"
                            size='md'
                            defaultValue="junior@nextui.org"
                            className="max-w-xl"
                        />
                        <Input
                            readOnly={!isEditable}
                            variant={!isEditable ? ' ' : 'bordered'}
                            type="text"
                            label="Date Of birth"
                            size='md'
                            defaultValue="3/4/1990"
                            className="max-w-xl"
                        />
                        <Input
                            readOnly={!isEditable}
                            variant={!isEditable ? ' ' : 'bordered'}
                            type="text"
                            label="Education"
                            size='md'
                            defaultValue="Indian Institute of Science"
                            className="max-w-xl"
                        />
                        <Input
                            readOnly={!isEditable}
                            variant={!isEditable ? ' ' : 'bordered'}
                            type="url"
                            label="Github"
                            size='md'
                            defaultValue="https://github.com/ashraf56"
                            className="max-w-xl"
                        />
                        <Input
                            readOnly={!isEditable}
                            variant={!isEditable ? ' ' : 'bordered'}
                            type="url"
                            label="Website"
                            size='md'
                            defaultValue="www.otherweb-232.com"
                            className="max-w-xl"
                        />


                    </div>
                    <div className='mt-2 text-center py-3'>
                        <Button radius="lg" size='md' onClick={handleUpdateProfile} className="bg-primary-300  text-white shadow-lg  ">
                            {isEditable ? 'save profile' : 'Update your Profile'}
                        </Button>
                    </div>
                </CardBody>
            </Card>

        </div>
    );
};

export default Profile;