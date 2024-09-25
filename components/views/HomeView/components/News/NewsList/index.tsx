import Link from "next/link"
import cls from "../styles.module.scss"
import Svg from "../../../../../../public/icons/chevron.svg";
import { temporaryData } from "../temporaryData"

const NewsList = () => {
    return (<ul className={cls.newsList}>
        {temporaryData.map(({ date, title, descr, href }, index) => (<li key={index} className={cls.newsItem}>
            <p className={cls.date}>{date}</p>
            <h3 className={cls.newsSmallTitle}>{title}</h3>
            <p className={cls.descr}>{descr}</p>
              <Link href={href} className={cls.link}>
            <p className={cls.linktxt}>READ MORE</p>
            <Svg />
          </Link>
        </li>))}
    </ul>)
}

export default NewsList