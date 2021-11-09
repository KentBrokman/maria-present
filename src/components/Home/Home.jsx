import classes from './HomeStyles.module.css'
import { useForm } from "react-hook-form";
import { Button1 } from '../commonComponents/button1/button1';
import { useHistory } from 'react-router-dom';

export const Home = () => {
    const { register, handleSubmit } = useForm()
    const history = useHistory()
    const onSubmit = data => {
        if (data.inputData === 'Maria') {
            history.push('/photos')
        }
    };
    return (
        <div className={classes.wrapper}>
            <div className={classes.backgroundImage}></div>
            <div className={classes.content}>
                <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
                    <input {...register("inputData")} className={classes.input} autoComplete='off'/>
                    <Button1>Войти</Button1>
                </form>
            </div>
        </div>
    )
}