import { Article } from "../models/article";

export const ARTICLES: Article[] = [
    new Article(1, 'Это мой блог', 'А не чей-нибудь еще...', 'Всем привет, я давно хотел создать свой блог о вещах которые совершенно никого не интересуют кроме меня, и я делаю это с надеждой на то что вдруг найдется человек которому будет интересно следить за жизнью человека, которого никогда не увидит :)', new Date()),
    new Article(2, 'Глава №1', 'Запихну сюда lorem, что-ли', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ', new Date()),
    new Article(3, 'Завтрак', 'Я покушал', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ', new Date()),
    new Article(4, 'Ужин', 'Я еще раз покушал. Не обедал.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ', new Date()),
]