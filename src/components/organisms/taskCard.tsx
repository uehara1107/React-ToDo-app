import { FC, useState } from "react";
import {
        Card, 
        CardBody, 
        Box, 
        Checkbox, 
        Flex, 
        Spacer, 
        FormControl,
        Input,
        Button,
        } from '@chakra-ui/react';
import { 
        DeleteIcon, 
        CheckIcon, 
        EditIcon,
        } from '@chakra-ui/icons';

type Props = { 
                taskTitle: string; 
                doneTask: boolean;
                onToggleDoneTask : () => void;
                delTask: () => void; 
                updateTask: (newTaskTitle: string) => void;
            };

export const TaskCard: FC<Props> = ({taskTitle, doneTask, onToggleDoneTask, delTask, updateTask}) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isEditing, setIsEditing] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [editedTaskTitle, setEditedTaskTitle] = useState(taskTitle);

    const onChangeTaskTitle = (
        e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
        const { value } = e.target;
        setEditedTaskTitle(value);
    };


    const save = () =>{
        updateTask(editedTaskTitle);
        setIsEditing(false);
    };

    return (
        <>
        <div>
            <Card backgroundColor={doneTask ? "red" : "green"}>
                <Box>
                <CardBody>
                    <Flex minWidth='max-content'>
                        <Box>
                            <Checkbox isChecked={doneTask} onChange={onToggleDoneTask}></Checkbox>
                        </Box>
                        <Spacer />
                        {isEditing ? (
                            <>
                            <FormControl>
                                <Input placeholder={editedTaskTitle} onChange={ onChangeTaskTitle } />
                            </FormControl>
                            <Spacer />
                            <Button onClick={save}>
                                <CheckIcon />
                            </Button>
                            </>
                        ) : (
                            <>
                            <Box>
                                {taskTitle}
                            </Box>
                            <Spacer />
                            <Button onClick={() => setIsEditing(true)}>
                                <EditIcon />
                            </Button>
                            </>
                        )}
                        <Spacer />
                        <Button onClick={delTask}>
                            <DeleteIcon />
                        </Button>
                    </Flex>                    
                </CardBody>
                </Box>
            </Card>
        </div>
        </>
    );

}