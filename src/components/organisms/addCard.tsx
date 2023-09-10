import { FC, useState } from "react";
import {
        Card, 
        CardBody, 
        FormControl,
        Input,
        Button,
        } from '@chakra-ui/react';
import { 
        AddIcon
        } from '@chakra-ui/icons';

type Props ={ add: (taskTitle: string) => void};

export const AddCard: FC<Props> = ({add}) => {
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [taskTitle, setTaskTitle] = useState("");

    const submitTask = (e: React.FormEvent) => {
        e.preventDefault();
        if(taskTitle.trim()){
            add(taskTitle);
            setTaskTitle("");
        }
    };

    const onChangeTaskTitle = (
        e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
        const { value } = e.target;
        setTaskTitle(value);
    };

    return(
        <Card>
            <CardBody>
                <form onSubmit={submitTask}>
                    <FormControl>
                        <Input 
                            value={taskTitle} 
                            onChange={onChangeTaskTitle}
                            placeholder="タスクを入力"
                        />
                        <Button type="submit">
                            <AddIcon />
                        </Button>
                    </FormControl>
                </form>
            </CardBody>
        </Card>
    );
};