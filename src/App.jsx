import { useEffect, useState } from 'react';
import './App.css';

const Icon = ({ children, size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {children}
  </svg>
);

const Users = (props) => (
  <Icon {...props}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </Icon>
);

const Book = (props) => (
  <Icon {...props}>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H21" />
    <path d="M6.5 2H21v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
    <path d="M9 6h8" />
    <path d="M9 10h8" />
  </Icon>
);

const BookOpen = (props) => (
  <Icon {...props}>
    <path d="M12 7v14" />
    <path d="M3 6a3 3 0 0 1 3-3h4a4 4 0 0 1 4 4a4 4 0 0 1 4-4h4a3 3 0 0 1 3 3v13a2 2 0 0 1-2 2h-5a4 4 0 0 0-4 4a4 4 0 0 0-4-4H5a2 2 0 0 1-2-2V6Z" />
  </Icon>
);

const Calendar = (props) => (
  <Icon {...props}>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M16 3v4" />
    <path d="M8 3v4" />
    <path d="M3 11h18" />
  </Icon>
);

const CheckSquare = (props) => (
  <Icon {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="m9 12 2 2 4-4" />
  </Icon>
);

const LogOut = (props) => (
  <Icon {...props}>
    <path d="M10 17l5-5-5-5" />
    <path d="M15 12H3" />
    <path d="M21 3v18" />
  </Icon>
);

const Menu = (props) => (
  <Icon {...props}>
    <path d="M3 6h18" />
    <path d="M3 12h18" />
    <path d="M3 18h18" />
  </Icon>
);

const X = (props) => (
  <Icon {...props}>
    <path d="M18 6 6 18" />
    <path d="M6 6l12 12" />
  </Icon>
);

const Bell = (props) => (
  <Icon {...props}>
    <path d="M6 8a6 6 0 1 1 12 0c0 7 3 8 3 8H3s3-1 3-8" />
    <path d="M10.3 20a2 2 0 0 0 3.4 0" />
  </Icon>
);

const Eye = (props) => (
  <Icon {...props}>
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
    <circle cx="12" cy="12" r="3" />
  </Icon>
);

const EyeOff = (props) => (
  <Icon {...props}>
    <path d="M3 3l18 18" />
    <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" />
    <path d="M9.9 4.2A10.5 10.5 0 0 1 12 4c6.5 0 10 8 10 8a18 18 0 0 1-4.2 5.2" />
    <path d="M6.2 6.2A18 18 0 0 0 2 12s3.5 8 10 8c1.1 0 2.1-.2 3.1-.6" />
  </Icon>
);

const Sun = (props) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="M4.93 4.93l1.41 1.41" />
    <path d="M17.66 17.66l1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="M4.93 19.07l1.41-1.41" />
    <path d="M17.66 6.34l1.41-1.41" />
  </Icon>
);

const Moon = (props) => (
  <Icon {...props}>
    <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a7 7 0 1 0 11 11Z" />
  </Icon>
);

const BarChart = (props) => (
  <Icon {...props}>
    <path d="M4 20V10" />
    <path d="M10 20V4" />
    <path d="M16 20v-8" />
    <path d="M22 20H2" />
  </Icon>
);

const User = (props) => (
  <Icon {...props}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21a8 8 0 0 1 16 0" />
  </Icon>
);

const Home = (props) => (
  <Icon {...props}>
    <path d="M3 11l9-8 9 8" />
    <path d="M5 10v11h14V10" />
  </Icon>
);

const Plus = (props) => (
  <Icon {...props}>
    <path d="M12 5v14" />
    <path d="M5 12h14" />
  </Icon>
);

const Edit2 = (props) => (
  <Icon {...props}>
    <path d="M4 20h4" />
    <path d="M14.5 5.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 10.5-10.5Z" />
  </Icon>
);

const Trash2 = (props) => (
  <Icon {...props}>
    <path d="M3 6h18" />
    <path d="M8 6V4h8v2" />
    <path d="M19 6l-1 14H6L5 6" />
    <path d="M10 11v6" />
    <path d="M14 11v6" />
  </Icon>
);

const MOCK_DATA = {
  users: [
    { id: 1, role: 'admin', name: 'Айгуль Мугалим', email: 'teacher@edu.com', subject: 'Frontend' },
    { id: 3, role: 'student', name: 'Алексей Иванов', email: 'student1@edu.com', phone: '+996 700 111 222', gender: 'male', account: 'student1', password: '12345', groupId: 1, bio: '' },
    { id: 4, role: 'student', name: 'Мария Петрова', email: 'student2@edu.com', phone: '+996 700 333 444', gender: 'female', account: 'student2', password: '12345', groupId: 1, bio: '' },
  ],
  courses: [
    { id: 1, name: 'Frontend Разработка (React)', duration: '3 месяца', price: '150 000 ₸', status: 'Активный' },
    { id: 2, name: 'Python для начинающих', duration: '2 месяца', price: '120 000 ₸', status: 'Активный' },
  ],
  groups: [
    { id: 1, name: 'FR-2026', courseId: 1, teacherId: 1, startDate: '01.06.2026', studentsCount: 12 },
  ],
  schedule: [
    { id: 1, groupId: 1, date: '04.06.2026', time: '18:30 - 20:30', topic: 'React компоненттери', room: 'Аудитория 404', type: 'Оффлайн' },
    { id: 2, groupId: 1, date: '06.06.2026', time: '18:30 - 20:30', topic: 'JavaScript үйрөнөбүз', room: 'Zoom Link', type: 'Онлайн' },
  ],
  journal: [
    { studentId: 3, date: '02.06.2026', status: 'present', grade: '5', comment: 'Отлично справился', groupId: 1 },
    { studentId: 4, date: '02.06.2026', status: 'late', grade: '4', comment: '', groupId: 1 },
  ],
  tasks: [
    { id: 1, groupId: 1, title: 'Верстка макета Figma', deadline: '05.06.2026', status: 'Активно', done: false },
  ],
};

const STORAGE_KEY = 'edu-system-pro-demo';
const AUTH_STORAGE_KEY = 'edu-system-pro-auth';

const ROLE_LABELS = {
  ru: {
    admin: 'Мугалим',
    teacher: 'Мугалим',
    student: 'Студент',
  },
  kg: {
    admin: 'Мугалим',
    teacher: 'Мугалим',
    student: 'Студент',
  },
  en: {
    admin: 'Mugalim',
    teacher: 'Mugalim',
    student: 'Student',
  },
};

const deepClone = (value) => JSON.parse(JSON.stringify(value));

const DEFAULT_AUTH_USERS = MOCK_DATA.users.filter((user) => user.role === 'admin');
const ADMIN_TEACHER_ID = 1;

const LANG_STORAGE_KEY = 'edu-system-pro-lang';
const THEME_STORAGE_KEY = 'edu-system-pro-theme';

const UI_TEXT = {
  ru: {
    appName: 'Ainabi IT',
    appSubtitle: '6-Month IT Course',
    adminRegisterPrompt: 'Сначала зарегистрируй мугалима',
    roleChoosePrompt: 'Сначала выбери роль, потом войди',
    chooseRole: 'Выбери роль',
    adminRole: 'Мугалим',
    teacherRole: 'Мугалим',
    studentRole: 'Студент',
    adminLogin: 'Вход',
    adminRegister: 'Регистрация',
    loginByAccount: 'Вход по аккаунту и паролю',
    loginByCode: 'Войти по коду доступа',
    studentFormHint: 'Войди по аккаунту или зарегистрируй личный кабинет студента.',
    studentLoginButton: 'Войти как студент',
    studentRegisterButton: 'Зарегистрироваться как студент',
    phone: 'Телефонный номер',
    gender: 'Пол',
    male: 'Мужской',
    female: 'Женский',
    avatar: 'Фото ученика',
    uploadAvatar: 'Загрузить фото',
    back: 'Назад',
    account: 'Аккаунт',
    password: 'Пароль',
    confirmPassword: 'Повтори пароль',
    adminName: 'Имя мугалима',
    registerAdmin: 'Зарегистрировать мугалима',
    adminLoginButton: 'Войти как мугалим',
    accessCode: 'Код доступа',
    codeHint: 'Введи код доступа, который выдал мугалим.',
    roleNotTeacher: 'Этот код не для мугалима.',
    roleNotStudent: 'Этот код не для студента.',
    codeNotFound: 'Код не найден.',
    overview: 'Обзор системы',
    dashboard: 'Главная',
    totalStudents: 'Всего студентов',
    activeCourses: 'Активные курсы',
    classesToday: 'Занятий сегодня',
    attendanceTitle: 'Посещаемость студентов',
    byJournal: 'По данным журнала',
    lastGroups: 'Последние группы',
    viewAll: 'Смотреть все',
    group: 'Группа',
    course: 'Курс',
    teacher: 'Мугалим',
    students: 'Студентов',
    status: 'Статус',
    active: 'Активна',
    codeTitle: 'Коды доступа',
    coursesMenu: 'Курсы',
    journalMenu: 'Журнал',
    tasksMenu: 'Домашние задания',
    profileMenu: 'Мой профиль',
    codeDescription: 'Код состоит из 9 цифр: первые две одинаковые, остальные разные. Я сделал их в формате `11-234-5678`.',
    participantName: 'Имя участника',
    generateCode: 'Сгенерировать код',
    reset: 'Сбросить',
    code: 'Код',
    role: 'Роль',
    name: 'Имя',
    actions: 'Действия',
    copied: 'Скопировано',
    copy: 'Копировать',
    activated: 'Активирован',
    waitingLogin: 'Ожидает входа',
    users: 'Пользователи',
    newUser: 'Новый пользователь',
    email: 'Email',
    subject: 'Предмет',
    groupId: 'Group ID',
    save: 'Сохранить',
    resetForm: 'Сбросить',
    schedule: 'Расписание',
    lessonTopic: 'Тема урока',
    date: 'Дата',
    time: 'Время',
    place: 'Место',
    type: 'Тип',
    myGroups: 'Мои группы',
    currentTasks: 'Актуальные задания',
    journal: 'Журнал группы FR-2026',
    saveChanges: 'Сохранить изменения',
    student: 'Студент',
    attendance: 'Присутствие',
    comment: 'Комментарий',
    homeTasks: 'Домашние задания',
    taskName: 'Название задания',
    deadline: 'Дедлайн',
    taskStatus: 'Статус',
    markDone: 'Отметить',
    done: 'Выполнено',
    inProgress: 'В работе',
    profile: 'Мой профиль',
    progress: 'Мой прогресс',
    attendanceProgress: 'Посещаемость',
    averageGrade: 'Средний балл',
    upcomingClasses: 'Ближайшие занятия',
    grades: 'Мои оценки',
    noRecords: 'Пока нет записей.',
    myTasks: 'Мои задания',
    noTasks: 'Пока нет заданий для твоей группы.',
    attendanceTable: 'Успеваемость',
    currentUser: 'Нельзя удалить текущего пользователя.',
    copiedCode: 'Код скопирован',
    failedCopy: 'Не удалось скопировать код.',
    adminRegistered: 'Мугалим зарегистрирован.',
    invalidAdminLogin: 'Неверный аккаунт или пароль мугалима.',
    fillAdminFields: 'Заполни имя, аккаунт и пароль.',
    fillStudentFields: 'Заполни имя, телефон, email, пол, аккаунт и пароль.',
    fillStudentLoginFields: 'Введи аккаунт и пароль.',
    invalidStudentLogin: 'Неверный аккаунт или пароль студента.',
    studentAccountExists: 'Такой аккаунт уже занят.',
    passwordMismatch: 'Пароли не совпадают.',
    createdCode: 'Код создан',
  },
  kg: {
    appName: 'Ainabi IT',
    appSubtitle: '6-Month IT Course',
    adminRegisterPrompt: 'Мугалимди биринчи каттаңыз',
    roleChoosePrompt: 'Алгач роль тандап, анан кириңиз',
    chooseRole: 'Ролду тандаңыз',
    adminRole: 'Мугалим',
    teacherRole: 'Мугалим',
    studentRole: 'Студент',
    adminLogin: 'Кирүү',
    adminRegister: 'Катталуу',
    loginByAccount: 'Аккаунт жана пароль менен кирүү',
    loginByCode: 'Код менен кирүү',
    studentFormHint: 'Аккаунт менен кириңиз же студенттин жеке кабинетин каттаңыз.',
    studentLoginButton: 'Студент катары кирүү',
    studentRegisterButton: 'Студент катары катталуу',
    phone: 'Телефон номери',
    gender: 'Жынысы',
    male: 'Эркек',
    female: 'Аял',
    avatar: 'Окуучунун сүрөтү',
    uploadAvatar: 'Сүрөт жүктөө',
    back: 'Артка',
    account: 'Аккаунт',
    password: 'Сырсөз',
    confirmPassword: 'Сырсөздү кайтала',
    adminName: 'Мугалимдин аты',
    registerAdmin: 'Мугалимди каттоо',
    adminLoginButton: 'Мугалим катары кирүү',
    accessCode: 'Кирүү коду',
    codeHint: 'Мугалим берген кодду жазыңыз.',
    roleNotTeacher: 'Бул код мугалим үчүн эмес.',
    roleNotStudent: 'Бул код студент үчүн эмес.',
    codeNotFound: 'Код табылган жок.',
    overview: 'Системанын көрүнүшү',
    dashboard: 'Башкы бет',
    totalStudents: 'Жалпы студенттер',
    activeCourses: 'Активдүү курстар',
    classesToday: 'Бүгүнкү сабактар',
    attendanceTitle: 'Студенттердин катышуусу',
    byJournal: 'Журналдагы маалымат боюнча',
    lastGroups: 'Акыркы топтор',
    viewAll: 'Баарын көрүү',
    group: 'Топ',
    course: 'Курс',
    teacher: 'Мугалим',
    students: 'Студенттер',
    status: 'Абалы',
    active: 'Активдүү',
    codeTitle: 'Кирүү коддору',
    coursesMenu: 'Курстар',
    journalMenu: 'Журнал',
    tasksMenu: 'Үй тапшырмалары',
    profileMenu: 'Менин профилим',
    codeDescription: 'Код 9 цифрадан турат: биринчи экөө окшош, калгандары ар башка. Форматы `11-234-5678`.',
    participantName: 'Катышуучунун аты',
    generateCode: 'Код түзүү',
    reset: 'Тазалоо',
    code: 'Код',
    role: 'Роль',
    name: 'Аты',
    actions: 'Аракеттер',
    copied: 'Көчүрүлдү',
    copy: 'Көчүрүү',
    activated: 'Иштеди',
    waitingLogin: 'Кирүүнү күтүп жатат',
    users: 'Колдонуучулар',
    newUser: 'Жаңы колдонуучу',
    email: 'Email',
    subject: 'Пән',
    groupId: 'Group ID',
    save: 'Сактоо',
    resetForm: 'Тазалоо',
    schedule: 'Расписание',
    lessonTopic: 'Сабактын темасы',
    date: 'Дата',
    time: 'Убакыт',
    place: 'Жайы',
    type: 'Түрү',
    myGroups: 'Менин топторум',
    currentTasks: 'Учурдагы тапшырмалар',
    journal: 'FR-2026 тобунун журналы',
    saveChanges: 'Өзгөртүүлөрдү сактоо',
    student: 'Студент',
    attendance: 'Катышуу',
    comment: 'Комментарий',
    homeTasks: 'Үй тапшырмалары',
    taskName: 'Тапшырманын аты',
    deadline: 'Мөөнөтү',
    taskStatus: 'Абалы',
    markDone: 'Белгилөө',
    done: 'Аяктады',
    inProgress: 'Аткарылып жатат',
    profile: 'Менин профилим',
    progress: 'Менин прогрессим',
    attendanceProgress: 'Катышуу',
    averageGrade: 'Орточо баа',
    upcomingClasses: 'Жакынкы сабактар',
    grades: 'Менин бааларым',
    noRecords: 'Азырынча жазуулар жок.',
    myTasks: 'Менин тапшырмаларым',
    noTasks: 'Сенин тобуң үчүн тапшырма жок.',
    attendanceTable: 'Окуу жетишүүсү',
    currentUser: 'Учурдагы колдонуучуну өчүрүүгө болбойт.',
    copiedCode: 'Код көчүрүлдү',
    failedCopy: 'Кодду көчүрүү болбоду.',
    adminRegistered: 'Мугалим катталды.',
    invalidAdminLogin: 'Мугалимдин аккаунту же сырсөзү туура эмес.',
    fillAdminFields: 'Аты, аккаунт жана сырсөздү толтуруңуз.',
    fillStudentFields: 'Аты, телефон, email, жынысы, аккаунт жана сырсөздү толтуруңуз.',
    fillStudentLoginFields: 'Аккаунт жана сырсөздү жазыңыз.',
    invalidStudentLogin: 'Студенттин аккаунту же сырсөзү туура эмес.',
    studentAccountExists: 'Бул аккаунт бош эмес.',
    passwordMismatch: 'Сырсөздөр дал келбейт.',
    createdCode: 'Код түзүлдү',
  },
  en: {
    appName: 'Ainabi IT',
    appSubtitle: '6-Month IT Course',
    adminRegisterPrompt: 'Register the mugalim first',
    roleChoosePrompt: 'Choose a role first, then log in',
    chooseRole: 'Choose a role',
    adminRole: 'Mugalim',
    teacherRole: 'Mugalim',
    studentRole: 'Student',
    adminLogin: 'Login',
    adminRegister: 'Register',
    loginByAccount: 'Log in with account and password',
    loginByCode: 'Log in with access code',
    studentFormHint: 'Log in with your account or register a student cabinet.',
    studentLoginButton: 'Log in as student',
    studentRegisterButton: 'Register as student',
    phone: 'Phone number',
    gender: 'Gender',
    male: 'Male',
    female: 'Female',
    avatar: 'Student photo',
    uploadAvatar: 'Upload photo',
    back: 'Back',
    account: 'Account',
    password: 'Password',
    confirmPassword: 'Confirm password',
    adminName: 'Mugalim name',
    registerAdmin: 'Register mugalim',
    adminLoginButton: 'Log in as mugalim',
    accessCode: 'Access code',
    codeHint: 'Enter the access code given by the mugalim.',
    roleNotTeacher: 'This code is not for a mugalim.',
    roleNotStudent: 'This code is not for a student.',
    codeNotFound: 'Code not found.',
    overview: 'System overview',
    dashboard: 'Home',
    totalStudents: 'Total students',
    activeCourses: 'Active courses',
    classesToday: 'Classes today',
    attendanceTitle: 'Student attendance',
    byJournal: 'From journal data',
    lastGroups: 'Latest groups',
    viewAll: 'View all',
    group: 'Group',
    course: 'Course',
    teacher: 'Mugalim',
    students: 'Students',
    status: 'Status',
    active: 'Active',
    codeTitle: 'Access codes',
    coursesMenu: 'Courses',
    journalMenu: 'Journal',
    tasksMenu: 'Homework',
    profileMenu: 'My profile',
    codeDescription: 'Each code has 9 digits: the first two are the same, the rest are different. The format is `11-234-5678`.',
    participantName: 'Participant name',
    generateCode: 'Generate code',
    reset: 'Reset',
    code: 'Code',
    role: 'Role',
    name: 'Name',
    actions: 'Actions',
    copied: 'Copied',
    copy: 'Copy',
    activated: 'Activated',
    waitingLogin: 'Waiting for login',
    users: 'Users',
    newUser: 'New user',
    email: 'Email',
    subject: 'Subject',
    groupId: 'Group ID',
    save: 'Save',
    resetForm: 'Reset',
    schedule: 'Schedule',
    lessonTopic: 'Lesson topic',
    date: 'Date',
    time: 'Time',
    place: 'Place',
    type: 'Type',
    myGroups: 'My groups',
    currentTasks: 'Current tasks',
    journal: 'FR-2026 group journal',
    saveChanges: 'Save changes',
    student: 'Student',
    attendance: 'Attendance',
    comment: 'Comment',
    homeTasks: 'Homework',
    taskName: 'Task name',
    deadline: 'Deadline',
    taskStatus: 'Status',
    markDone: 'Mark done',
    done: 'Done',
    inProgress: 'In progress',
    profile: 'My profile',
    progress: 'My progress',
    attendanceProgress: 'Attendance',
    averageGrade: 'Average grade',
    upcomingClasses: 'Upcoming classes',
    grades: 'My grades',
    noRecords: 'No records yet.',
    myTasks: 'My tasks',
    noTasks: 'No tasks for your group yet.',
    attendanceTable: 'Performance',
    currentUser: 'You cannot delete the current user.',
    copiedCode: 'Code copied',
    failedCopy: 'Could not copy the code.',
    adminRegistered: 'Mugalim registered.',
    invalidAdminLogin: 'Invalid mugalim account or password.',
    fillAdminFields: 'Fill in name, account, and password.',
    fillStudentFields: 'Fill in name, phone, email, gender, account, and password.',
    fillStudentLoginFields: 'Enter account and password.',
    invalidStudentLogin: 'Invalid student account or password.',
    studentAccountExists: 'This account is already taken.',
    passwordMismatch: 'Passwords do not match.',
    createdCode: 'Code created',
  },
};

const loadLanguage = () => {
  if (typeof window === 'undefined') return 'ru';
  try {
    const stored = window.localStorage.getItem(LANG_STORAGE_KEY);
    return stored && UI_TEXT[stored] ? stored : 'ru';
  } catch {
    return 'ru';
  }
};

const loadTheme = () => {
  if (typeof window === 'undefined') return 'day';
  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    return stored === 'night' ? 'night' : 'day';
  } catch {
    return 'day';
  }
};

const getText = (language, key) => UI_TEXT[language]?.[key] || UI_TEXT.ru[key] || key;

const mergeDefaultAuthUsers = (users) => {
  const mergedUsers = [...users];

  for (const defaultUser of DEFAULT_AUTH_USERS) {
    const hasRole = mergedUsers.some((user) => user.role === defaultUser.role);
    if (!hasRole) {
      mergedUsers.unshift(defaultUser);
    }
  }

  return mergedUsers;
};

const normalizeAdminTeacherData = (data) => ({
  ...data,
  users: mergeDefaultAuthUsers(data.users)
    .filter((user) => user.role !== 'teacher')
    .map((user) => (user.role === 'admin' ? { ...user, subject: user.subject || 'Frontend' } : user)),
  groups: data.groups.map((group) => ({ ...group, teacherId: ADMIN_TEACHER_ID })),
});

const createDefaultAuthData = () => ({
  adminAccount: null,
  inviteCodes: [],
  session: null,
});

const loadAuthData = () => {
  if (typeof window === 'undefined') return createDefaultAuthData();

  try {
    const raw = window.localStorage.getItem(AUTH_STORAGE_KEY);
    if (!raw) return createDefaultAuthData();
    const parsed = JSON.parse(raw);
    return {
      adminAccount: parsed?.adminAccount || null,
      inviteCodes: Array.isArray(parsed?.inviteCodes)
        ? parsed.inviteCodes.filter((invite) => invite.role !== 'teacher')
        : [],
      session: parsed?.session?.type === 'teacher' ? null : parsed?.session || null,
    };
  } catch {
    return createDefaultAuthData();
  }
};

const normalizeCodeValue = (value) => String(value || '').replace(/\D/g, '');

const loadData = () => {
  if (typeof window === 'undefined') return normalizeAdminTeacherData(deepClone(MOCK_DATA));

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return normalizeAdminTeacherData(deepClone(MOCK_DATA));
    const parsed = JSON.parse(raw);
    if (!parsed?.users || !parsed?.courses || !parsed?.groups || !parsed?.schedule || !parsed?.journal || !parsed?.tasks) {
      return normalizeAdminTeacherData(deepClone(MOCK_DATA));
    }
    return normalizeAdminTeacherData(parsed);
  } catch {
    return normalizeAdminTeacherData(deepClone(MOCK_DATA));
  }
};

const nextId = (items) => items.reduce((max, item) => Math.max(max, item.id), 0) + 1;

const getRoleLabel = (role, language = 'ru') => ROLE_LABELS[language]?.[role] || ROLE_LABELS.ru[role] || role;

const getAttendanceLabel = (status, language = 'ru') => {
  if (status === 'present') {
    return language === 'kg' ? 'Келди' : language === 'en' ? 'Present' : 'Присутствовал';
  }
  if (status === 'absent') {
    return language === 'kg' ? 'Жок' : language === 'en' ? 'Absent' : 'Отсутствовал';
  }
  if (status === 'late') {
    return language === 'kg' ? 'Келди' : language === 'en' ? 'Present' : 'Присутствовал';
  }
  return status;
};

const getGenderLabel = (gender, language = 'ru') => {
  if (gender === 'male') return getText(language, 'male');
  if (gender === 'female') return getText(language, 'female');
  return gender || '-';
};

const getScheduleDateParts = (date, language = 'ru') => {
  const [day = '', month = '', year = ''] = String(date || '').split('.');
  const monthLabels = {
    ru: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
    kg: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
    en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  };
  const weekdayLabels = {
    ru: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    kg: ['Жекшемби', 'Дүйшөмбү', 'Шейшемби', 'Шаршемби', 'Бейшемби', 'Жума', 'Ишемби'],
    en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  };
  const parsedDate = day && month && year ? new Date(Number(year), Number(month) - 1, Number(day)) : null;
  const monthIndex = Number(month) - 1;

  return {
    day,
    month: monthLabels[language]?.[monthIndex] || monthLabels.ru[monthIndex] || month,
    weekday: parsedDate && !Number.isNaN(parsedDate.getTime()) ? weekdayLabels[language]?.[parsedDate.getDay()] : date,
  };
};

const normalizeJournalEntry = (studentId, date, entry = {}) => ({
  studentId,
  date,
  status: entry.status || 'present',
  grade: entry.grade || '',
  comment: entry.comment || '',
  groupId: entry.groupId || 1,
});

const buildJournalRows = (data, date) =>
  data.users
    .filter((user) => user.role === 'student')
    .map((student) => {
      const entry = data.journal.find((item) => item.studentId === student.id && item.date === date);
      return {
        studentId: student.id,
        status: entry?.status || 'present',
        grade: entry?.grade || '',
        comment: entry?.comment || '',
      };
    });

const StatCard = ({ title, value, icon: IconComponent, colorClass }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 flex items-center gap-4">
    <div className={`p-4 rounded-lg ${colorClass}`}>
      <IconComponent size={24} />
    </div>
    <div>
      <p className="text-sm text-slate-500 font-medium">{title}</p>
      <p className="text-2xl font-bold text-slate-800">{value}</p>
    </div>
  </div>
);

const PasswordInput = ({ value, onChange, placeholder, isVisible, onToggle }) => {
  const ToggleIcon = isVisible ? EyeOff : Eye;

  return (
    <div className="password-field">
      <input
        type={isVisible ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-lg px-3 py-2"
      />
      <button type="button" onClick={onToggle} className="password-toggle" aria-label={placeholder}>
        <ToggleIcon size={18} />
      </button>
    </div>
  );
};

export default function App() {
  const [appData, setAppData] = useState(loadData);
  const [authData, setAuthData] = useState(loadAuthData);
  const [language, setLanguage] = useState(loadLanguage);
  const [theme, setTheme] = useState(loadTheme);
  const [authScreen, setAuthScreen] = useState('choose');
  const [authMode, setAuthMode] = useState('admin-login');
  const [studentAuthMode, setStudentAuthMode] = useState('student-login');
  const [currentView, setCurrentView] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [editingUserId, setEditingUserId] = useState(null);
  const [editingCourseId, setEditingCourseId] = useState(null);
  const [editingScheduleId, setEditingScheduleId] = useState(null);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [selectedJournalDate, setSelectedJournalDate] = useState(
    MOCK_DATA.journal[0]?.date || MOCK_DATA.schedule[0]?.date || ''
  );
  const [journalRows, setJournalRows] = useState(buildJournalRows(loadData(), MOCK_DATA.journal[0]?.date || MOCK_DATA.schedule[0]?.date || ''));
  const [userForm, setUserForm] = useState({ name: '', email: '', role: 'student', subject: '', groupId: '1' });
  const [courseForm, setCourseForm] = useState({ name: '', duration: '', price: '', status: 'Активный' });
  const [scheduleForm, setScheduleForm] = useState({ groupId: '1', date: '', time: '', topic: '', room: '', type: 'Оффлайн' });
  const [taskForm, setTaskForm] = useState({ groupId: '1', title: '', deadline: '', status: 'Активно' });
  const [adminRegisterForm, setAdminRegisterForm] = useState({ name: '', account: '', password: '', confirmPassword: '' });
  const [adminLoginForm, setAdminLoginForm] = useState({ account: '', password: '' });
  const [studentLoginForm, setStudentLoginForm] = useState({
    name: '',
    phone: '',
    email: '',
    gender: 'male',
    avatar: '',
    account: '',
    password: '',
    confirmPassword: '',
  });
  const [authMessage, setAuthMessage] = useState('');
  const [showAdminPassword, setShowAdminPassword] = useState(false);
  const [showAdminConfirmPassword, setShowAdminConfirmPassword] = useState(false);
  const [showStudentPassword, setShowStudentPassword] = useState(false);
  const [showStudentConfirmPassword, setShowStudentConfirmPassword] = useState(false);
  const t = (key) => getText(language, key);

  const currentUser = authData.session ? appData.users.find((user) => user.id === authData.session.userId) || null : null;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
    }
  }, [appData]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(authData));
    }
  }, [authData]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(LANG_STORAGE_KEY, language);
      document.documentElement.lang = language;
    }
  }, [language]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
      document.documentElement.dataset.theme = theme;
    }
  }, [theme]);

  const allowedViews = currentUser
    ? {
        admin: ['dashboard', 'users', 'courses', 'schedule', 'journal', 'tasks'],
        student: ['dashboard', 'schedule', 'grades', 'tasks'],
      }[currentUser.role]
    : [];

  const activeView = currentUser && allowedViews.includes(currentView) ? currentView : 'dashboard';

  const logout = () => {
    setAuthData((previous) => ({ ...previous, session: null }));
    setCurrentView('dashboard');
    setIsMobileMenuOpen(false);
    setAuthScreen('choose');
  };

  const registerAdmin = () => {
    const name = adminRegisterForm.name.trim();
    const account = adminRegisterForm.account.trim();
    const password = adminRegisterForm.password.trim();

    if (!name || !account || !password) {
      setAuthMessage(t('fillAdminFields'));
      return;
    }

    if (adminRegisterForm.password !== adminRegisterForm.confirmPassword) {
      setAuthMessage(t('passwordMismatch'));
      return;
    }

    setAppData((previous) => ({
      ...previous,
      users: previous.users.map((user) =>
        user.role === 'admin'
          ? {
              ...user,
              name,
              email: account,
            }
          : user
      ),
    }));

    setAuthData({
      adminAccount: {
        name,
        account,
        password,
        userId: 1,
      },
      inviteCodes: authData.inviteCodes,
      session: {
        type: 'admin',
        userId: 1,
      },
    });
    setAuthMessage(t('adminRegistered'));
    setAuthMode('admin-login');
    setAuthScreen('admin');
    setCurrentView('dashboard');
    setIsMobileMenuOpen(false);
  };

  const loginAdmin = () => {
    const account = adminLoginForm.account.trim();
    const password = adminLoginForm.password.trim();
    const adminAccount = authData.adminAccount;

    if (!adminAccount || adminAccount.account !== account || adminAccount.password !== password) {
      setAuthMessage(t('invalidAdminLogin'));
      return;
    }

    setAuthData((previous) => ({
      ...previous,
      session: {
        type: 'admin',
        userId: previous.adminAccount?.userId || 1,
      },
    }));
    setAuthMessage('');
    setAuthScreen('choose');
    setCurrentView('dashboard');
    setIsMobileMenuOpen(false);
  };

  const loginStudent = () => {
    const account = studentLoginForm.account.trim();
    const password = studentLoginForm.password.trim();

    if (!account || !password) {
      setAuthMessage(t('fillStudentLoginFields'));
      return;
    }

    const student = appData.users.find(
      (user) => user.role === 'student' && user.account === account && user.password === password
    );

    if (!student) {
      setAuthMessage(t('invalidStudentLogin'));
      return;
    }

    setAuthData((previous) => ({
      ...previous,
      session: {
        type: 'student',
        userId: student.id,
      },
    }));
    setAuthMessage('');
    setAuthScreen('choose');
    setCurrentView('dashboard');
    setIsMobileMenuOpen(false);
  };

  const registerStudent = () => {
    const name = studentLoginForm.name.trim();
    const phone = studentLoginForm.phone.trim();
    const email = studentLoginForm.email.trim();
    const gender = studentLoginForm.gender;
    const avatar = studentLoginForm.avatar;
    const account = studentLoginForm.account.trim();
    const password = studentLoginForm.password.trim();

    if (!name || !phone || !email || !gender || !account || !password) {
      setAuthMessage(t('fillStudentFields'));
      return;
    }

    if (studentLoginForm.password !== studentLoginForm.confirmPassword) {
      setAuthMessage(t('passwordMismatch'));
      return;
    }

    const accountOwner = appData.users.find((user) => user.role === 'student' && user.account === account);
    const normalizedEmail = email.toLowerCase();
    const normalizedPhone = normalizeCodeValue(phone);
    const existingStudent = appData.users.find(
      (user) =>
        user.role === 'student' &&
        (user.email?.toLowerCase() === normalizedEmail || normalizeCodeValue(user.phone) === normalizedPhone)
    );

    if (accountOwner && accountOwner.id !== existingStudent?.id) {
      setAuthMessage(t('studentAccountExists'));
      return;
    }

    const sessionUserId = existingStudent?.id || nextId(appData.users);

    setAppData((previous) => {
      if (existingStudent) {
        return {
          ...previous,
          users: previous.users.map((user) =>
            user.id === existingStudent.id
              ? {
                  ...user,
                  name,
                  phone,
                  email,
                  gender,
                  avatar: avatar || user.avatar || '',
                  account,
                  password,
                  groupId: user.groupId || 1,
                  bio: user.bio || '',
                }
              : user
          ),
        };
      }

      return {
        ...previous,
        users: [
          ...previous.users,
          {
            id: sessionUserId,
            role: 'student',
            name,
            phone,
            email,
            gender,
            avatar,
            account,
            password,
            groupId: 1,
            bio: '',
          },
        ],
      };
    });

    setAuthData((previous) => ({
      ...previous,
      session: {
        type: 'student',
        userId: sessionUserId,
      },
    }));
    setAuthMessage('');
    setAuthScreen('choose');
    setCurrentView('dashboard');
    setIsMobileMenuOpen(false);
  };

  const handleStudentAvatarChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setStudentLoginForm((previous) => ({ ...previous, avatar: String(reader.result || '') }));
    };
    reader.readAsDataURL(file);
  };

  const menuItems = currentUser
    ? {
        admin: [
          { id: 'dashboard', label: t('dashboard'), icon: Home },
          { id: 'users', label: t('users'), icon: Users },
          { id: 'courses', label: t('coursesMenu'), icon: BookOpen },
          { id: 'schedule', label: t('schedule'), icon: Calendar },
          { id: 'journal', label: t('journalMenu'), icon: CheckSquare },
          { id: 'tasks', label: t('tasksMenu'), icon: Book },
        ],
        student: [
          { id: 'dashboard', label: t('profileMenu'), icon: User },
          { id: 'schedule', label: t('schedule'), icon: Calendar },
          { id: 'grades', label: t('grades'), icon: BarChart },
          { id: 'tasks', label: t('myTasks'), icon: CheckSquare },
        ],
      }[currentUser.role]
    : [];

  const removeListItem = (listName, id) => {
    if (listName === 'users' && currentUser?.id === id) {
      setAuthMessage(t('currentUser'));
      return;
    }

    setAppData((previous) => ({
      ...previous,
      [listName]: previous[listName].filter((item) => item.id !== id),
    }));
  };

  const updateListItem = (listName, id, updater) => {
    setAppData((previous) => ({
      ...previous,
      [listName]: previous[listName].map((item) => (item.id === id ? updater(item) : item)),
    }));
  };

  const saveUser = () => {
    const name = userForm.name.trim();
    const email = userForm.email.trim();
    if (!name || !email) return;

    if (editingUserId) {
      setAppData((previous) => ({
        ...previous,
        users: previous.users.map((user) =>
          user.id === editingUserId
            ? {
                ...user,
                name,
                email,
                role: userForm.role,
                subject: userForm.role === 'admin' ? userForm.subject.trim() : '',
                groupId: userForm.role === 'student' ? Number(userForm.groupId || 1) : undefined,
                bio: userForm.role === 'student' ? user.bio || '' : user.bio,
              }
            : user
        ),
      }));
    } else {
      const newUser = {
        id: nextId(appData.users),
        name,
        email,
        role: userForm.role,
        subject: userForm.role === 'admin' ? userForm.subject.trim() : undefined,
        groupId: userForm.role === 'student' ? Number(userForm.groupId || 1) : undefined,
        bio: userForm.role === 'student' ? '' : undefined,
      };

      setAppData((previous) => ({
        ...previous,
        users: [...previous.users, newUser],
      }));
    }

    setEditingUserId(null);
    setUserForm({ name: '', email: '', role: 'student', subject: '', groupId: '1' });
  };

  const editUser = (user) => {
    setEditingUserId(user.id);
    setUserForm({
      name: user.name || '',
      email: user.email || '',
      role: user.role || 'student',
      subject: user.subject || '',
      groupId: String(user.groupId || 1),
    });
  };

  const saveCourse = () => {
    const name = courseForm.name.trim();
    if (!name) return;

    const payload = {
      name,
      duration: courseForm.duration.trim(),
      price: courseForm.price.trim(),
      status: courseForm.status.trim() || 'Активный',
    };

    if (editingCourseId) {
      updateListItem('courses', editingCourseId, (course) => ({ ...course, ...payload }));
    } else {
      setAppData((previous) => ({
        ...previous,
        courses: [...previous.courses, { id: nextId(previous.courses), ...payload }],
      }));
    }

    setEditingCourseId(null);
    setCourseForm({ name: '', duration: '', price: '', status: 'Активный' });
  };

  const editCourse = (course) => {
    setEditingCourseId(course.id);
    setCourseForm({
      name: course.name || '',
      duration: course.duration || '',
      price: course.price || '',
      status: course.status || 'Активный',
    });
  };

  const saveSchedule = () => {
    if (!scheduleForm.date || !scheduleForm.time || !scheduleForm.topic || !scheduleForm.room) return;

    const payload = {
      groupId: Number(scheduleForm.groupId || 1),
      date: scheduleForm.date,
      time: scheduleForm.time,
      topic: scheduleForm.topic.trim(),
      room: scheduleForm.room,
      type: scheduleForm.type,
    };

    if (editingScheduleId) {
      updateListItem('schedule', editingScheduleId, (item) => ({ ...item, ...payload }));
    } else {
      setAppData((previous) => ({
        ...previous,
        schedule: [...previous.schedule, { id: nextId(previous.schedule), ...payload }],
      }));
    }

    setEditingScheduleId(null);
    setScheduleForm({ groupId: '1', date: '', time: '', topic: '', room: '', type: 'Оффлайн' });
  };

  const editSchedule = (item) => {
    setEditingScheduleId(item.id);
    setScheduleForm({
      groupId: String(item.groupId || 1),
      date: item.date || '',
      time: item.time || '',
      topic: item.topic || '',
      room: item.room || '',
      type: item.type || 'Оффлайн',
    });
  };

  const saveTask = () => {
    const title = taskForm.title.trim();
    if (!title || !taskForm.deadline) return;

    const payload = {
      groupId: Number(taskForm.groupId || 1),
      title,
      deadline: taskForm.deadline,
      status: taskForm.status.trim() || 'Активно',
      done: false,
    };

    if (editingTaskId) {
      updateListItem('tasks', editingTaskId, (task) => ({ ...task, ...payload }));
    } else {
      setAppData((previous) => ({
        ...previous,
        tasks: [...previous.tasks, { id: nextId(previous.tasks), ...payload }],
      }));
    }

    setEditingTaskId(null);
    setTaskForm({ groupId: '1', title: '', deadline: '', status: 'Активно' });
  };

  const editTask = (task) => {
    setEditingTaskId(task.id);
    setTaskForm({
      groupId: String(task.groupId || 1),
      title: task.title || '',
      deadline: task.deadline || '',
      status: task.status || 'Активно',
    });
  };

  const saveJournal = () => {
    setAppData((previous) => {
      const otherEntries = previous.journal.filter((entry) => entry.date !== selectedJournalDate);
      const newEntries = journalRows.map((row) =>
        normalizeJournalEntry(row.studentId, selectedJournalDate, {
          status: row.status,
          grade: row.grade,
          comment: row.comment,
          groupId: 1,
        })
      );
      return {
        ...previous,
        journal: [...otherEntries, ...newEntries],
      };
    });
    setJournalRows(
      buildJournalRows(
        {
          ...appData,
          journal: [
            ...appData.journal.filter((entry) => entry.date !== selectedJournalDate),
            ...journalRows.map((row) =>
              normalizeJournalEntry(row.studentId, selectedJournalDate, {
                status: row.status,
                grade: row.grade,
                comment: row.comment,
                groupId: 1,
              })
            ),
          ],
        },
        selectedJournalDate
      )
    );
  };

  const toggleTaskDone = (taskId) => {
    setAppData((previous) => ({
      ...previous,
      tasks: previous.tasks.map((task) => (task.id === taskId ? { ...task, done: !task.done } : task)),
    }));
  };

  const adminDashboard = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-800">{t('overview')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title={t('totalStudents')} value={String(appData.users.filter((user) => user.role === 'student').length)} icon={Users} colorClass="bg-blue-100 text-blue-600" />
        <StatCard title={t('activeCourses')} value={String(appData.courses.filter((course) => course.status === 'Активный').length)} icon={BookOpen} colorClass="bg-indigo-100 text-indigo-600" />
        <StatCard title={t('classesToday')} value={String(appData.schedule.length)} icon={Calendar} colorClass="bg-emerald-100 text-emerald-600" />
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
        <div className="flex items-center justify-between gap-4 mb-4">
          <h3 className="font-bold text-slate-800">{t('attendanceTitle')}</h3>
          <span className="text-sm text-slate-500">{t('byJournal')}</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {appData.users
            .filter((user) => user.role === 'student')
            .map((student) => {
              const studentEntries = appData.journal.filter((entry) => entry.studentId === student.id);
              const totalEntries = studentEntries.length;
              const presentEntries = studentEntries.filter((entry) => entry.status === 'present' || entry.status === 'late').length;
              const attendancePercent = totalEntries ? Math.round((presentEntries / totalEntries) * 100) : 0;
              const lastEntry = studentEntries[studentEntries.length - 1];

              return (
                <div key={student.id} className="rounded-xl border border-slate-100 p-4 bg-slate-50">
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <div>
                      <p className="font-medium text-slate-800">{student.name}</p>
                      <p className="text-xs text-slate-500">{student.email}</p>
                    </div>
                    <span className="text-lg font-bold text-slate-800">{attendancePercent}%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        attendancePercent >= 90 ? 'bg-emerald-500' : attendancePercent >= 75 ? 'bg-amber-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${attendancePercent}%` }}
                    />
                  </div>
                  <div className="mt-3 text-xs text-slate-500 flex items-center justify-between gap-3">
                    <span>{language === 'kg' ? 'Жазуулар:' : language === 'en' ? 'Entries:' : 'Записей:'} {totalEntries}</span>
                    <span>{lastEntry ? `${language === 'kg' ? 'Акыркы статус:' : language === 'en' ? 'Last status:' : 'Последний статус:'} ${getAttendanceLabel(lastEntry.status, language)}` : t('noRecords')}</span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <h3 className="font-bold text-slate-800">{t('lastGroups')}</h3>
          <button className="text-indigo-600 text-sm font-medium">{t('viewAll')}</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-sm">
                <th className="p-4 font-medium">{t('group')}</th>
                <th className="p-4 font-medium">{t('course')}</th>
                <th className="p-4 font-medium">{t('teacher')}</th>
                <th className="p-4 font-medium">{t('students')}</th>
                <th className="p-4 font-medium">{t('status')}</th>
              </tr>
            </thead>
            <tbody>
              {appData.groups.map((group) => (
                <tr key={group.id} className="border-b border-slate-50 hover:bg-slate-50">
                  <td className="p-4 font-medium text-slate-800">{group.name}</td>
                  <td className="p-4 text-slate-600">{appData.courses.find((course) => course.id === group.courseId)?.name}</td>
                  <td className="p-4 text-slate-600">{appData.users.find((user) => user.id === group.teacherId)?.name}</td>
                  <td className="p-4 text-slate-600">{group.studentsCount}</td>
                      <td className="p-4">
                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">{t('active')}</span>
                      </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const adminUsers = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center gap-4 flex-wrap">
        <h2 className="text-2xl font-bold text-slate-800">{t('users')}</h2>
        <button
          onClick={() => {
            setEditingUserId(null);
            setUserForm({ name: '', email: '', role: 'student', subject: '', groupId: '1' });
          }}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-indigo-700 transition"
        >
          <Plus size={20} /> {t('newUser')}
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input value={userForm.name} onChange={(event) => setUserForm({ ...userForm, name: event.target.value })} placeholder={t('name')} className="rounded-lg px-3 py-2" />
          <input value={userForm.email} onChange={(event) => setUserForm({ ...userForm, email: event.target.value })} placeholder={t('email')} className="rounded-lg px-3 py-2" />
          <select value={userForm.role} onChange={(event) => setUserForm({ ...userForm, role: event.target.value })} className="rounded-lg px-3 py-2">
            <option value="admin">{t('adminRole')}</option>
            <option value="student">{t('studentRole')}</option>
          </select>
          {userForm.role === 'admin' ? (
            <input value={userForm.subject} onChange={(event) => setUserForm({ ...userForm, subject: event.target.value })} placeholder={t('subject')} className="rounded-lg px-3 py-2" />
          ) : (
            <input value={userForm.groupId} onChange={(event) => setUserForm({ ...userForm, groupId: event.target.value })} placeholder={t('groupId')} className="rounded-lg px-3 py-2" />
          )}
        </div>
        <div className="flex gap-3 mt-4">
          <button onClick={saveUser} className="bg-indigo-600 text-white px-4 py-2 rounded-lg">{t('save')}</button>
          <button
            onClick={() => {
              setEditingUserId(null);
              setUserForm({ name: '', email: '', role: 'student', subject: '', groupId: '1' });
            }}
            className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg"
          >
            {t('resetForm')}
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50 text-slate-500 text-sm border-b border-slate-100">
              <th className="p-4 font-medium">{t('name')}</th>
              <th className="p-4 font-medium">{t('role')}</th>
              <th className="p-4 font-medium">{t('email')}</th>
              <th className="p-4 font-medium text-right">{t('actions')}</th>
            </tr>
          </thead>
          <tbody>
            {appData.users.map((user) => (
              <tr key={user.id} className="border-b border-slate-50 hover:bg-slate-50">
                <td className="p-4 font-medium text-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="avatar-mini w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 text-xs">
                      {user.avatar ? <img src={user.avatar} alt={user.name} /> : user.name.charAt(0)}
                    </div>
                    <span>{user.name}</span>
                  </div>
                </td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      user.role === 'admin' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
                    }`}
                  >
                    {getRoleLabel(user.role, language)}
                  </span>
                </td>
                <td className="p-4 text-slate-600">{user.email}</td>
                <td className="p-4 flex justify-end gap-2">
                  <button onClick={() => editUser(user)} className="p-2 text-slate-400 hover:text-indigo-600 rounded-lg hover:bg-indigo-50">
                    <Edit2 size={18} />
                  </button>
                  <button onClick={() => removeListItem('users', user.id)} className="p-2 text-slate-400 hover:text-red-600 rounded-lg hover:bg-red-50">
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const adminCourses = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-800">{t('coursesMenu')}</h2>
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input value={courseForm.name} onChange={(event) => setCourseForm({ ...courseForm, name: event.target.value })} placeholder={t('course')} className="rounded-lg px-3 py-2" />
          <input value={courseForm.duration} onChange={(event) => setCourseForm({ ...courseForm, duration: event.target.value })} placeholder={language === 'en' ? 'Duration' : language === 'kg' ? 'Узактыгы' : 'Длительность'} className="rounded-lg px-3 py-2" />
          <input value={courseForm.price} onChange={(event) => setCourseForm({ ...courseForm, price: event.target.value })} placeholder={language === 'en' ? 'Price' : language === 'kg' ? 'Баасы' : 'Цена'} className="rounded-lg px-3 py-2" />
          <input value={courseForm.status} onChange={(event) => setCourseForm({ ...courseForm, status: event.target.value })} placeholder={t('status')} className="rounded-lg px-3 py-2" />
        </div>
        <div className="flex gap-3 mt-4">
          <button onClick={saveCourse} className="bg-indigo-600 text-white px-4 py-2 rounded-lg">{t('save')}</button>
          <button
            onClick={() => {
              setEditingCourseId(null);
              setCourseForm({ name: '', duration: '', price: '', status: 'Активный' });
            }}
            className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg"
          >
            {t('resetForm')}
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50 text-slate-500 text-sm">
              <th className="p-4 font-medium">{t('course')}</th>
              <th className="p-4 font-medium">{language === 'en' ? 'Duration' : language === 'kg' ? 'Узактыгы' : 'Длительность'}</th>
              <th className="p-4 font-medium">{language === 'en' ? 'Price' : language === 'kg' ? 'Баасы' : 'Цена'}</th>
              <th className="p-4 font-medium">{t('status')}</th>
              <th className="p-4 font-medium text-right">{t('actions')}</th>
            </tr>
          </thead>
          <tbody>
            {appData.courses.map((course) => (
              <tr key={course.id} className="border-b border-slate-50 hover:bg-slate-50">
                <td className="p-4 font-medium text-slate-800">{course.name}</td>
                <td className="p-4 text-slate-600">{course.duration}</td>
                <td className="p-4 text-slate-600">{course.price}</td>
                <td className="p-4 text-slate-600">{course.status}</td>
                <td className="p-4 flex justify-end gap-2">
                  <button onClick={() => editCourse(course)} className="p-2 text-slate-400 hover:text-indigo-600 rounded-lg hover:bg-indigo-50">
                    <Edit2 size={18} />
                  </button>
                  <button onClick={() => removeListItem('courses', course.id)} className="p-2 text-slate-400 hover:text-red-600 rounded-lg hover:bg-red-50">
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderScheduleCards = (items, canEdit = false) => (
    <div className="schedule-board">
      {items.map((item) => {
        const group = appData.groups.find((entry) => entry.id === item.groupId);
        const course = appData.courses.find((entry) => entry.id === group?.courseId);
        const dateParts = getScheduleDateParts(item.date, language);

        return (
          <div key={item.id} className="schedule-card bg-white rounded-xl shadow-sm border border-slate-100">
            <div className="schedule-date">
              <span className="schedule-day">{dateParts.day}</span>
              <span className="schedule-month">{dateParts.month}</span>
            </div>
            <div className="schedule-main">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div>
                  <p className="text-sm text-slate-500">{dateParts.weekday}</p>
                  <h3 className="font-bold text-slate-800">{item.topic || course?.name || t('lessonTopic')}</h3>
                </div>
                <span className="schedule-time">{item.time}</span>
              </div>
              <div className="schedule-meta">
                <span>{t('group')}: {group?.name || '-'}</span>
                <span>{t('course')}: {course?.name || '-'}</span>
                <span>{t('type')}: {item.type}</span>
                <span>{t('place')}: {item.room}</span>
              </div>
            </div>
            {canEdit ? (
              <div className="schedule-actions">
                <button onClick={() => editSchedule(item)} className="p-2 text-slate-400 hover:text-indigo-600 rounded-lg hover:bg-indigo-50">
                  <Edit2 size={18} />
                </button>
                <button onClick={() => removeListItem('schedule', item.id)} className="p-2 text-slate-400 hover:text-red-600 rounded-lg hover:bg-red-50">
                  <Trash2 size={18} />
                </button>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );

  const adminSchedule = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-800">{t('schedule')}</h2>
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select value={scheduleForm.groupId} onChange={(event) => setScheduleForm({ ...scheduleForm, groupId: event.target.value })} className="rounded-lg px-3 py-2">
            {appData.groups.map((group) => (
              <option key={group.id} value={group.id}>{group.name}</option>
            ))}
          </select>
          <input value={scheduleForm.date} onChange={(event) => setScheduleForm({ ...scheduleForm, date: event.target.value })} placeholder={t('date')} className="rounded-lg px-3 py-2" />
          <input value={scheduleForm.time} onChange={(event) => setScheduleForm({ ...scheduleForm, time: event.target.value })} placeholder={t('time')} className="rounded-lg px-3 py-2" />
          <input value={scheduleForm.topic} onChange={(event) => setScheduleForm({ ...scheduleForm, topic: event.target.value })} placeholder={t('lessonTopic')} className="rounded-lg px-3 py-2" />
          <input value={scheduleForm.room} onChange={(event) => setScheduleForm({ ...scheduleForm, room: event.target.value })} placeholder={language === 'en' ? 'Classroom / link' : language === 'kg' ? 'Класс / шилтеме' : 'Аудитория / ссылка'} className="rounded-lg px-3 py-2" />
          <select value={scheduleForm.type} onChange={(event) => setScheduleForm({ ...scheduleForm, type: event.target.value })} className="rounded-lg px-3 py-2">
            <option value="Оффлайн">{language === 'en' ? 'Offline' : language === 'kg' ? 'Оффлайн' : 'Оффлайн'}</option>
            <option value="Онлайн">{language === 'en' ? 'Online' : language === 'kg' ? 'Онлайн' : 'Онлайн'}</option>
          </select>
        </div>
        <div className="flex gap-3 mt-4">
          <button onClick={saveSchedule} className="bg-indigo-600 text-white px-4 py-2 rounded-lg">{t('save')}</button>
          <button
            onClick={() => {
              setEditingScheduleId(null);
              setScheduleForm({ groupId: '1', date: '', time: '', topic: '', room: '', type: 'Оффлайн' });
            }}
            className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg"
          >
            {t('resetForm')}
          </button>
        </div>
      </div>

      {renderScheduleCards(appData.schedule, true)}
    </div>
  );

  const teacherJournal = () => {
    const students = appData.users.filter((user) => user.role === 'student');

    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-800">{t('journal')}</h2>
        <div className="flex gap-4 mb-6 flex-wrap">
          <select
            value={selectedJournalDate}
            onChange={(event) => {
              const nextDate = event.target.value;
              setSelectedJournalDate(nextDate);
              setJournalRows(buildJournalRows(appData, nextDate));
            }}
            className="border border-slate-200 rounded-lg p-2 bg-white text-slate-700 outline-none"
          >
            {[...new Set([...appData.schedule.map((item) => item.date), ...appData.journal.map((entry) => entry.date)])].map((date) => (
              <option key={date} value={date}>
                {date}
              </option>
            ))}
          </select>
          <button onClick={saveJournal} className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
            {t('saveChanges')}
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-sm">
                <th className="p-4 font-medium">{t('student')}</th>
                <th className="p-4 font-medium">{t('attendance')}</th>
                <th className="p-4 font-medium">{language === 'en' ? 'Grade' : language === 'kg' ? 'Баа' : 'Оценка'}</th>
                <th className="p-4 font-medium">{t('comment')}</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => {
                const row = journalRows.find((entry) => entry.studentId === student.id) || {
                  status: 'present',
                  grade: '',
                  comment: '',
                };

                return (
                  <tr key={student.id} className="border-b border-slate-50 hover:bg-slate-50">
                    <td className="p-4 font-medium text-slate-800 flex items-center gap-3">
                      <div className="avatar-mini w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 text-xs">
                        {student.avatar ? <img src={student.avatar} alt={student.name} /> : student.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-slate-800">{student.name}</p>
                        <p className="text-xs text-slate-500">{student.phone || student.email}</p>
                      </div>
                    </td>
                    <td className="p-4">
                      <select
                        value={row.status}
                        onChange={(event) =>
                          setJournalRows((previous) =>
                            previous.map((entry) => (entry.studentId === student.id ? { ...entry, status: event.target.value } : entry))
                          )
                        }
                        className="border border-slate-200 rounded-md p-1.5 w-full text-sm bg-white"
                      >
                        <option value="present">{getAttendanceLabel('present', language)}</option>
                        <option value="absent">{getAttendanceLabel('absent', language)}</option>
                      </select>
                    </td>
                    <td className="p-4">
                      <input
                        type="number"
                        min="1"
                        max="5"
                        value={row.grade}
                        onChange={(event) =>
                          setJournalRows((previous) =>
                            previous.map((entry) => (entry.studentId === student.id ? { ...entry, grade: event.target.value } : entry))
                          )
                        }
                        placeholder="-"
                        className="border border-slate-200 rounded-md p-1.5 w-full text-sm text-center outline-none"
                      />
                    </td>
                    <td className="p-4">
                      <input
                        type="text"
                        value={row.comment}
                        onChange={(event) =>
                          setJournalRows((previous) =>
                            previous.map((entry) => (entry.studentId === student.id ? { ...entry, comment: event.target.value } : entry))
                          )
                        }
                        placeholder={language === 'en' ? 'Add a comment...' : language === 'kg' ? 'Комментарий кошуу...' : 'Добавить комментарий...'}
                        className="border border-slate-200 rounded-md p-1.5 w-full text-sm outline-none"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const teacherTasks = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-800">{t('homeTasks')}</h2>
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select value={taskForm.groupId} onChange={(event) => setTaskForm({ ...taskForm, groupId: event.target.value })} className="rounded-lg px-3 py-2">
            {appData.groups.map((group) => (
              <option key={group.id} value={group.id}>
                {group.name}
              </option>
            ))}
          </select>
          <input value={taskForm.title} onChange={(event) => setTaskForm({ ...taskForm, title: event.target.value })} placeholder={t('taskName')} className="rounded-lg px-3 py-2" />
          <input value={taskForm.deadline} onChange={(event) => setTaskForm({ ...taskForm, deadline: event.target.value })} placeholder={t('deadline')} className="rounded-lg px-3 py-2" />
          <input value={taskForm.status} onChange={(event) => setTaskForm({ ...taskForm, status: event.target.value })} placeholder={t('taskStatus')} className="rounded-lg px-3 py-2" />
        </div>
        <div className="flex gap-3 mt-4">
          <button onClick={saveTask} className="bg-indigo-600 text-white px-4 py-2 rounded-lg">{t('save')}</button>
          <button
            onClick={() => {
              setEditingTaskId(null);
              setTaskForm({ groupId: '1', title: '', deadline: '', status: 'Активно' });
            }}
            className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg"
          >
            {t('resetForm')}
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {appData.tasks.map((task) => (
          <div key={task.id} className="bg-white rounded-xl shadow-sm border border-slate-100 p-4 flex items-center justify-between gap-4">
            <div>
              <h3 className="font-medium text-slate-800">{task.title}</h3>
              <p className="text-sm text-slate-500">{task.deadline} • {task.status}</p>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => toggleTaskDone(task.id)} className="px-3 py-2 rounded-lg bg-emerald-50 text-emerald-700">
                {task.done ? t('done') : t('markDone')}
              </button>
              <button onClick={() => editTask(task)} className="p-2 text-slate-400 hover:text-indigo-600 rounded-lg hover:bg-indigo-50">
                <Edit2 size={18} />
              </button>
              <button onClick={() => removeListItem('tasks', task.id)} className="p-2 text-slate-400 hover:text-red-600 rounded-lg hover:bg-red-50">
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const studentDashboard = () => {
    const studentTasks = appData.tasks.filter((task) => task.groupId === currentUser?.groupId);
    const studentGrades = appData.journal.filter((entry) => entry.studentId === currentUser?.id);
    const totalEntries = studentGrades.length;
    const presentEntries = studentGrades.filter((entry) => entry.status === 'present' || entry.status === 'late').length;
    const attendancePercent = totalEntries ? Math.round((presentEntries / totalEntries) * 100) : 0;
    const averageGrade = totalEntries
      ? (studentGrades.reduce((sum, entry) => sum + (Number(entry.grade) || 0), 0) / totalEntries).toFixed(1)
      : '0.0';
    const averageGradePercent = Math.min(100, Math.round((Number(averageGrade) / 5) * 100));

    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <div className="avatar-large w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold">
            {currentUser?.avatar ? <img src={currentUser.avatar} alt={currentUser?.name} /> : currentUser?.name?.charAt(0)}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-800">{currentUser?.name}</h2>
            <p className="text-slate-500">{language === 'en' ? 'Group: FR-2026 • Frontend Development' : language === 'kg' ? 'Топ: FR-2026 • Frontend иштеп чыгуу' : 'Группа: FR-2026 • Frontend Разработка'}</p>
            <div className="flex gap-2 mt-4 flex-wrap">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">{currentUser?.phone || t('phone')}</span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">{currentUser?.email}</span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">{getGenderLabel(currentUser?.gender, language)}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
              <BarChart className="text-indigo-600" size={20} /> {t('progress')}
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-600">{t('attendanceProgress')}</span>
                  <span className="font-medium text-slate-800">{attendancePercent}%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{ width: `${attendancePercent}%` }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-600">{t('averageGrade')}</span>
                  <span className="font-medium text-slate-800">{averageGrade}</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${averageGradePercent}%` }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Calendar className="text-indigo-600" size={20} /> {t('upcomingClasses')}
            </h3>
            <div className="space-y-3">
              {appData.schedule.map((item) => (
                <div key={item.id} className="flex gap-4 items-start p-3 rounded-lg border border-slate-100 hover:bg-slate-50 transition">
                  <div className="bg-indigo-50 text-indigo-700 p-2 rounded-lg text-center min-w-[60px]">
                    <div className="text-xs font-bold uppercase">{item.date.split('.')[0]}</div>
                    <div className="text-xs">{language === 'en' ? 'Jun' : language === 'kg' ? 'Июн' : 'Июн'}</div>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800">{item.time}</h4>
                    <p className="text-sm text-slate-500">{item.type} • {item.room}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 space-y-3">
          <h3 className="font-bold text-slate-800">{t('grades')}</h3>
          {studentGrades.length ? (
            studentGrades.map((entry, index) => (
              <div key={`${entry.date}-${index}`} className="flex items-center justify-between gap-4 p-3 rounded-lg border border-slate-100">
                <div>
                  <p className="font-medium text-slate-800">{entry.date}</p>
                  <p className="text-sm text-slate-500">{getAttendanceLabel(entry.status, language)}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-slate-800">{entry.grade || '-'}</p>
                  <p className="text-sm text-slate-500">{entry.comment || '-'}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-slate-500">{t('noRecords')}</p>
          )}
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 space-y-3">
          <h3 className="font-bold text-slate-800">{t('myTasks')}</h3>
          {studentTasks.map((task) => (
            <div key={task.id} className="flex items-center justify-between gap-4 p-3 rounded-lg border border-slate-100">
              <div>
                <p className="font-medium text-slate-800">{task.title}</p>
                <p className="text-sm text-slate-500">{task.deadline}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${task.done ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                {task.done ? t('done') : t('inProgress')}
              </span>
            </div>
          ))}
          {!studentTasks.length ? <p className="text-sm text-slate-500">{t('noTasks')}</p> : null}
        </div>
      </div>
    );
  };

  const studentSchedule = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-800">{t('schedule')}</h2>
      {renderScheduleCards(appData.schedule.filter((item) => item.groupId === currentUser?.groupId))}
    </div>
  );

  const studentGrades = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-800">{t('attendanceTable')}</h2>
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50 text-slate-500 text-sm">
              <th className="p-4 font-medium">{t('date')}</th>
              <th className="p-4 font-medium">{t('attendance')}</th>
              <th className="p-4 font-medium">{language === 'en' ? 'Grade' : language === 'kg' ? 'Баа' : 'Оценка'}</th>
              <th className="p-4 font-medium">{t('comment')}</th>
            </tr>
          </thead>
          <tbody>
            {appData.journal
              .filter((entry) => entry.studentId === currentUser?.id)
              .map((entry) => (
                <tr key={`${entry.date}-${entry.studentId}`} className="border-b border-slate-50 hover:bg-slate-50">
                  <td className="p-4">{entry.date}</td>
                  <td className="p-4">{getAttendanceLabel(entry.status, language)}</td>
                  <td className="p-4">{entry.grade || '-'}</td>
                  <td className="p-4">{entry.comment || '-'}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const studentTasks = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-800">{t('myTasks')}</h2>
      <div className="space-y-3">
        {appData.tasks.map((task) => (
          <div key={task.id} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between">
            <div>
              <h3 className="font-medium text-slate-800">{task.title}</h3>
              <p className="text-sm text-slate-500">{task.deadline}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${task.done ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
              {task.done ? t('done') : t('inProgress')}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    if (!currentUser) return null;

    switch (currentUser.role) {
      case 'admin':
        if (activeView === 'dashboard') return adminDashboard();
        if (activeView === 'users') return adminUsers();
        if (activeView === 'courses') return adminCourses();
        if (activeView === 'schedule') return adminSchedule();
        if (activeView === 'journal') return teacherJournal();
        if (activeView === 'tasks') return teacherTasks();
        return adminDashboard();
      case 'student':
        if (activeView === 'dashboard') return studentDashboard();
        if (activeView === 'schedule') return studentSchedule();
        if (activeView === 'grades') return studentGrades();
        if (activeView === 'tasks') return studentTasks();
        return studentDashboard();
      default:
        return null;
    }
  };

  if (!currentUser) {
    return (
      <div className="auth-page min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="auth-card bg-white max-w-2xl w-full rounded-2xl shadow-xl p-8">
          <div className="brand-mark w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-indigo-200">
            <BookOpen className="text-white" size={32} />
          </div>
          <h1 className="text-2xl font-bold text-slate-800 text-center mb-2">{t('appName')}</h1>
          <p className="text-sm font-semibold text-indigo-600 text-center mb-2">{t('appSubtitle')}</p>
          <p className="text-slate-500 text-center mb-6">{t('roleChoosePrompt')}</p>
          {authMessage ? <p className="mb-4 text-sm text-indigo-600 text-center">{authMessage}</p> : null}

          <div className="flex justify-center gap-2 mb-6">
            {['kg', 'ru', 'en'].map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => setLanguage(lang)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition ${
                  language === lang ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-600 border-slate-200 hover:border-indigo-300'
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setTheme((value) => (value === 'day' ? 'night' : 'day'))}
              className="theme-toggle px-3 py-1.5 rounded-full text-xs font-semibold border transition"
              title={theme === 'day' ? 'Night' : 'Day'}
            >
              {theme === 'day' ? <Moon size={16} /> : <Sun size={16} />}
            </button>
          </div>

          {authScreen === 'choose' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={() => {
                  setAuthScreen('admin');
                  setAuthMode(authData.adminAccount ? 'admin-login' : 'admin-register');
                  setAuthMessage('');
                }}
                className="p-5 rounded-2xl border border-slate-200 text-left hover:border-indigo-600 hover:bg-indigo-50 transition"
              >
                <User className="text-indigo-600 mb-3" />
                <h3 className="font-semibold text-slate-800">{t('adminRole')}</h3>
                <p className="text-sm text-slate-500 mt-1">{authData.adminAccount ? t('loginByAccount') : t('adminRegisterPrompt')}</p>
              </button>
              <button onClick={() => { setAuthScreen('student'); setStudentAuthMode('student-login'); setAuthMessage(''); }} className="p-5 rounded-2xl border border-slate-200 text-left hover:border-blue-600 hover:bg-blue-50 transition">
                <Book className="text-blue-600 mb-3" />
                <h3 className="font-semibold text-slate-800">{t('studentRole')}</h3>
                <p className="text-sm text-slate-500 mt-1">{t('studentFormHint')}</p>
              </button>
            </div>
          ) : authScreen === 'admin' ? (
            <div className="space-y-4">
              <div className="flex gap-2 p-1 bg-slate-100 rounded-xl">
                <button onClick={() => setAuthMode('admin-login')} className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium ${authMode === 'admin-login' ? 'bg-white shadow text-slate-800' : 'text-slate-500'}`}>{t('adminLogin')}</button>
                <button onClick={() => setAuthMode('admin-register')} className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium ${authMode === 'admin-register' ? 'bg-white shadow text-slate-800' : 'text-slate-500'}`}>{t('adminRegister')}</button>
              </div>
              {authMode === 'admin-login' ? (
                <div className="space-y-3">
                  <input value={adminLoginForm.account} onChange={(event) => setAdminLoginForm({ ...adminLoginForm, account: event.target.value })} placeholder={t('account')} className="w-full rounded-lg px-3 py-2" />
                  <PasswordInput
                    value={adminLoginForm.password}
                    onChange={(event) => setAdminLoginForm({ ...adminLoginForm, password: event.target.value })}
                    placeholder={t('password')}
                    isVisible={showAdminPassword}
                    onToggle={() => setShowAdminPassword((value) => !value)}
                  />
                  <button onClick={loginAdmin} className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg">{t('adminLoginButton')}</button>
                </div>
              ) : (
                <div className="space-y-3">
                  <input value={adminRegisterForm.name} onChange={(event) => setAdminRegisterForm({ ...adminRegisterForm, name: event.target.value })} placeholder={t('adminName')} className="w-full rounded-lg px-3 py-2" />
                  <input value={adminRegisterForm.account} onChange={(event) => setAdminRegisterForm({ ...adminRegisterForm, account: event.target.value })} placeholder={t('account')} className="w-full rounded-lg px-3 py-2" />
                  <PasswordInput
                    value={adminRegisterForm.password}
                    onChange={(event) => setAdminRegisterForm({ ...adminRegisterForm, password: event.target.value })}
                    placeholder={t('password')}
                    isVisible={showAdminPassword}
                    onToggle={() => setShowAdminPassword((value) => !value)}
                  />
                  <PasswordInput
                    value={adminRegisterForm.confirmPassword}
                    onChange={(event) => setAdminRegisterForm({ ...adminRegisterForm, confirmPassword: event.target.value })}
                    placeholder={t('confirmPassword')}
                    isVisible={showAdminConfirmPassword}
                    onToggle={() => setShowAdminConfirmPassword((value) => !value)}
                  />
                  <button onClick={registerAdmin} className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg">{t('registerAdmin')}</button>
                </div>
              )}
              <button onClick={() => setAuthScreen('choose')} className="w-full bg-slate-100 text-slate-700 px-4 py-2 rounded-lg">{t('back')}</button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex gap-2 p-1 bg-slate-100 rounded-xl">
                <button onClick={() => setStudentAuthMode('student-login')} className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium ${studentAuthMode === 'student-login' ? 'bg-white shadow text-slate-800' : 'text-slate-500'}`}>{t('adminLogin')}</button>
                <button onClick={() => setStudentAuthMode('student-register')} className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium ${studentAuthMode === 'student-register' ? 'bg-white shadow text-slate-800' : 'text-slate-500'}`}>{t('adminRegister')}</button>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <p className="font-medium text-slate-800">{t('studentRole')}</p>
                <p className="text-sm text-slate-500 mt-1">{t('studentFormHint')}</p>
              </div>
              {studentAuthMode === 'student-login' ? (
                <div className="space-y-3">
                  <input
                    value={studentLoginForm.account}
                    onChange={(event) => setStudentLoginForm({ ...studentLoginForm, account: event.target.value })}
                    placeholder={t('account')}
                    className="w-full rounded-lg px-3 py-2"
                  />
                  <PasswordInput
                    value={studentLoginForm.password}
                    onChange={(event) => setStudentLoginForm({ ...studentLoginForm, password: event.target.value })}
                    placeholder={t('password')}
                    isVisible={showStudentPassword}
                    onToggle={() => setShowStudentPassword((value) => !value)}
                  />
                  <button onClick={loginStudent} className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg">{t('studentLoginButton')}</button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="avatar-picker md:col-span-2">
                      <div className="avatar-preview rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                        {studentLoginForm.avatar ? (
                          <img src={studentLoginForm.avatar} alt={t('avatar')} />
                        ) : (
                          studentLoginForm.name.trim().charAt(0) || <User size={28} />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-slate-800">{t('avatar')}</p>
                        <label className="avatar-upload-button bg-slate-100 text-slate-700 px-4 py-2 rounded-lg">
                          {t('uploadAvatar')}
                          <input type="file" accept="image/*" onChange={handleStudentAvatarChange} className="hidden" />
                        </label>
                      </div>
                    </div>
                    <input
                      value={studentLoginForm.name}
                      onChange={(event) => setStudentLoginForm({ ...studentLoginForm, name: event.target.value })}
                      placeholder={t('name')}
                      className="w-full rounded-lg px-3 py-2"
                    />
                    <input
                      value={studentLoginForm.phone}
                      onChange={(event) => setStudentLoginForm({ ...studentLoginForm, phone: event.target.value })}
                      placeholder={t('phone')}
                      className="w-full rounded-lg px-3 py-2"
                    />
                    <input
                      type="email"
                      value={studentLoginForm.email}
                      onChange={(event) => setStudentLoginForm({ ...studentLoginForm, email: event.target.value })}
                      placeholder={t('email')}
                      className="w-full rounded-lg px-3 py-2"
                    />
                    <select
                      value={studentLoginForm.gender}
                      onChange={(event) => setStudentLoginForm({ ...studentLoginForm, gender: event.target.value })}
                      className="w-full rounded-lg px-3 py-2"
                    >
                      <option value="male">{t('male')}</option>
                      <option value="female">{t('female')}</option>
                    </select>
                    <input
                      value={studentLoginForm.account}
                      onChange={(event) => setStudentLoginForm({ ...studentLoginForm, account: event.target.value })}
                      placeholder={t('account')}
                      className="w-full rounded-lg px-3 py-2"
                    />
                    <PasswordInput
                      value={studentLoginForm.password}
                      onChange={(event) => setStudentLoginForm({ ...studentLoginForm, password: event.target.value })}
                      placeholder={t('password')}
                      isVisible={showStudentPassword}
                      onToggle={() => setShowStudentPassword((value) => !value)}
                    />
                    <PasswordInput
                      value={studentLoginForm.confirmPassword}
                      onChange={(event) => setStudentLoginForm({ ...studentLoginForm, confirmPassword: event.target.value })}
                      placeholder={t('confirmPassword')}
                      isVisible={showStudentConfirmPassword}
                      onToggle={() => setShowStudentConfirmPassword((value) => !value)}
                    />
                  </div>
                  <button onClick={registerStudent} className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg">{t('studentRegisterButton')}</button>
                </div>
              )}
              <button onClick={() => setAuthScreen('choose')} className="w-full bg-slate-100 text-slate-700 px-4 py-2 rounded-lg">{t('back')}</button>
            </div>
          )}
        </div>
      </div>
    );
  }
  return (
    <div className="app-shell min-h-screen bg-slate-50 flex">
      {isMobileMenuOpen && (
        <div className="mobile-menu-backdrop fixed inset-0 bg-slate-900/50 z-40 md:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      <aside className={`app-sidebar fixed inset-y-0 left-0 w-64 bg-slate-900 text-slate-300 transform transition-transform duration-300 ease-in-out z-50 md:relative md:translate-x-0 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 flex justify-between items-center border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
              <BookOpen className="text-white" size={18} />
            </div>
            <div>
              <span className="font-bold text-white text-lg block">{t('appName')}</span>
              <span className="text-xs text-slate-400">{t('appSubtitle')}</span>
            </div>
          </div>
          <button className="md:hidden text-slate-400 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="p-4 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 mt-4">
          {language === 'kg' ? 'Меню' : language === 'en' ? 'Menu' : 'Меню'} ({getRoleLabel(currentUser.role, language)})
        </div>

        <nav className="px-3 space-y-1">
          {menuItems.map((item) => {
            const ItemIcon = item.icon;
            const isActive = activeView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentView(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                  isActive ? 'bg-indigo-600 text-white' : 'hover:bg-slate-800 hover:text-white'
                }`}
              >
                <ItemIcon size={18} />
                <span className="font-medium text-sm">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>

      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <header className="topbar bg-white h-16 border-b border-slate-200 flex items-center justify-between px-4 lg:px-8 z-10 shrink-0">
          <div className="flex items-center gap-4">
            <button className="md:hidden text-slate-500 hover:text-indigo-600" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu size={24} />
            </button>
            <h1 className="text-lg font-bold text-slate-800 hidden sm:block">
              {menuItems.find((item) => item.id === activeView)?.label || (language === 'kg' ? 'Башкаруу панели' : language === 'en' ? 'Control panel' : 'Панель управления')}
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-1 bg-slate-100 rounded-full p-1">
              {['kg', 'ru', 'en'].map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setLanguage(lang)}
                  className={`px-2.5 py-1 rounded-full text-xs font-semibold transition ${
                    language === lang ? 'bg-white shadow text-slate-800' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setTheme((value) => (value === 'day' ? 'night' : 'day'))}
              className="theme-toggle p-2 rounded-full transition"
              title={theme === 'day' ? 'Night' : 'Day'}
            >
              {theme === 'day' ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            <button className="relative p-2 text-slate-400 hover:bg-slate-100 rounded-full transition">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>

            <div className="h-8 w-px bg-slate-200 mx-2"></div>

            <div className="flex items-center gap-3">
              <div className="hidden text-right sm:block">
                <p className="text-sm font-medium text-slate-800 leading-none">{currentUser.name}</p>
                <p className="text-xs text-slate-500 mt-1">{getRoleLabel(currentUser.role, language)}</p>
              </div>
              <div className="header-avatar w-10 h-10 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold">
                {currentUser.avatar ? <img src={currentUser.avatar} alt={currentUser.name} /> : currentUser.name.charAt(0)}
              </div>
              <button
                onClick={logout}
                className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition ml-2"
                title={language === 'kg' ? 'Чыгуу' : language === 'en' ? 'Log out' : 'Выйти'}
              >
                <LogOut size={20} />
              </button>
            </div>
          </div>
        </header>

        <div className="workspace flex-1 overflow-auto p-4 lg:p-8 bg-slate-50/50 text-slate-800">
          <div className="max-w-6xl mx-auto">{renderContent()}</div>
        </div>
      </main>
    </div>
  );
}


