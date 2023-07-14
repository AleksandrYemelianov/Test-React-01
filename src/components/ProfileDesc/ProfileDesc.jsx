import { MdAlternateEmail, MdLocationPin } from 'react-icons/md';
import css from "./ProfileDesc.module.css"

export const ProfileDesc = ({ avatar, username, tag, location }) => {
    return (
        <div className={css.description}>
            <img
                src={avatar}
                alt={username}
                className={ css.avatar}
            />
            <p className={css.name}>{username}</p>
            <p className={ css.tag}><MdAlternateEmail />{tag}</p>
            <p className={css.location}><MdLocationPin />{location}</p>
        </div>
    )
}