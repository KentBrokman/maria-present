import classes from './button1.module.css'



export const Button1 = (props) => {
    console.log(props)
    return (
        <button className={classes.button1}>Learn More</button>
    )
}