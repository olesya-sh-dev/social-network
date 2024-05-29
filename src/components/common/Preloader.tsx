import picture from '../../assets/images/Ghost.gif'
export const Preloader = () => {
    return(
        <img src={picture} style={{borderRadius: '50%', width: '100px', height: '100px'}} />
    )
}