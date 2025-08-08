import React, { useState, useEffect, useRef } from 'react';
import { ReactComponent as Logo } from './assets/icon.svg';
import { ReactComponent as PersonsIcon } from './assets/persons.svg';
import { ReactComponent as WalletIcon } from './assets/wallet.svg';
import { ReactComponent as SiteIcon } from './assets/site.svg';
import { ReactComponent as ExitIcon } from './assets/exit.svg';
import UnionIcon from './assets/Union.png';
import Group12Icon from './assets/Group12.png';


//=========== ИКОНКИ (SVG) ===========//
// Для удобства определим иконки как отдельные компоненты.
// В реальном проекте их лучше вынести в отдельный файл.

const ICONS = {
  feed: (props) => (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 4H10V10H4V4ZM4 14H10V20H4V14ZM14 4H20V10H14V4ZM14 14H20V20H14V14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  marketplace: (props) => (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 10C16 11.1046 15.1046 12 14 12C12.8954 12 12 11.1046 12 10C12 8.89543 12.8954 8 14 8C15.1046 8 16 8.89543 16 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  persons: (props) => (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  desktop: (props) => (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 21h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 17v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  messages: (props) => (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  favorites: (props) => (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.77 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  help: (props) => (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 17h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  bell: (props) => (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  user: (props) => (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  plus: (props) => (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="12" y1="5" x2="12" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  chevronDown: (props) => (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  arrowRight: (props) => (
    <svg {...props} width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  arrowLeft: (props) => (
     <svg {...props} width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  upload: (props) => (
    <svg {...props} width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <polyline points="17 8 12 3 7 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="12" y1="3" x2="12" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  check: (props) => (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  burger: (props) => (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="3" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  close: (props) => (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  shoppingCart: (props) => (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="9" cy="21" r="1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="20" cy="21" r="1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1 1H4L7.68 16.79C7.85 17.51 8.52 18 9.24 18H19.76C20.48 18 21.15 17.51 21.32 16.79L23 9H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  search: (props) => (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};

//=========== КОМПОНЕНТЫ UI (КНОПКИ И Т.Д.) ===========//

const Button = ({ children, variant = 'big-classic', icon: Icon, iconPosition = 'left', className = '', disabled, iconClass = '', ...props }) => {
  const baseStyles = "inline-flex items-center justify-center font-bold rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variantStyles = {
    'big-classic': 'px-8 py-3 bg-main text-white hover:bg-main-light active:bg-main-dark disabled:bg-grey-2 disabled:text-text-grey',
    'big-outline': 'px-8 py-3 bg-transparent border-2 border-main text-main hover:bg-main hover:text-white active:bg-main-dark disabled:border-grey-2 disabled:text-grey',
    'big-with-arrow': 'px-8 py-3 bg-main text-white hover:bg-main-light active:bg-main-dark disabled:bg-grey-2 disabled:text-text-grey',
    'small-classic': 'px-4 py-2 text-sm bg-main text-white hover:bg-main-light active:bg-main-dark disabled:bg-grey-2 disabled:text-text-grey',
    'small-outline': 'px-4 py-2 text-sm bg-transparent border border-main text-main hover:bg-main hover:text-white active:bg-main-dark disabled:border-grey-2 disabled:text-grey',
    'small-with-arrow': 'px-4 py-2 text-sm bg-main text-white hover:bg-main-light active:bg-main-dark disabled:bg-grey-2 disabled:text-text-grey',
    'text': 'text-main hover:text-main-dark disabled:text-grey font-semibold',
    'icon': 'p-2 rounded-full hover:bg-grey-2/50 active:bg-grey-2 disabled:text-grey',
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]} ${className}`} disabled={disabled} {...props}>
      {Icon && iconPosition === 'left' && <Icon className={iconClass || "mr-2"} />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className={iconClass || "ml-2"} />}
    </button>
  );
};

//=========== НОВЫЕ КОМПОНЕНТЫ: ЛЕНДИНГ И РЕГИСТРАЦИЯ ===========//

const LandingPage = ({ onNavigate }) => {
  const botImages = [
    "https://placehold.co/300x150/E0F2F7/000000?text=Finance+Chart+1",
    "https://placehold.co/300x150/E8F5E9/000000?text=Stock+Market+2",
    "https://placehold.co/300x150/FFF3E0/000000?text=Crypto+Graph+3",
    "https://placehold.co/300x150/FBE9E7/000000?text=Trading+View+4",
    "https://placehold.co/300x150/E1F5FE/000000?text=Investment+5",
    "https://placehold.co/300x150/F3E5F5/000000?text=Economy+Data+6",
    "https://placehold.co/300x150/E0F7FA/000000?text=Market+Trend+7",
    "https://placehold.co/300x150/FCE4EC/000000?text=Financial+Growth+8",
    "https://placehold.co/300x150/EDE7F6/000000?text=Analytics+9",
    "https://placehold.co/300x150/E8F5E9/000000?text=Portfolio+10",
    "https://placehold.co/300x150/D1C4E9/000000?text=Forex+Strategy+11",
    "https://placehold.co/300x150/BBDEFB/000000?text=Commodity+Trading+12",
    "https://placehold.co/300x150/C8E6C9/000000?text=Options+Analysis+13",
    "https://placehold.co/300x150/FFCDD2/000000?text=Risk+Management+14",
    "https://placehold.co/300x150/DCEDC8/000000?text=Algorithmic+Trading+15",
  ];

  const botData = [
    { name: "Алго-бот по нефти", description: "Автоматизированный торговый робот, специализирующийся на анализе и торговле фьючерсами на нефть. Использует передовые алгоритмы для выявления оптимальных точек входа и выхода.", rating: 4.5, comments: 12, image: botImages[0] },
    { name: "Эксперт на криптовалюту BTC", description: "Высокочастотный бот для торговли Bitcoin. Анализирует рыночные данные в реальном времени, обеспечивая быстрые и точные сделки.", rating: 4.8, comments: 25, image: botImages[1] },
    { name: "Algo-tradingbot Gold", description: "Специализированный бот для торговли золотом. Использует комбинацию технических индикаторов и новостного анализа для принятия торговых решений.", rating: 4.2, comments: 8, image: botImages[2] },
    { name: "Форекс Мастер Pro", description: "Бот для автоматической торговли на рынке Форекс. Оптимизирован для работы с основными валютными парами, минимизируя риски и максимизируя прибыль.", rating: 4.7, comments: 18, image: botImages[3] },
    { name: "Индексный Скальпер", description: "Робот, разработанный для скальпинга на фондовых индексах. Быстро реагирует на малейшие изменения рынка, совершая множество коротких сделок.", rating: 4.1, comments: 7, image: botImages[4] },
    { name: "Товарный Аналитик", description: "Бот для анализа и торговли сырьевыми товарами. Учитывает сезонность и глобальные экономические факторы для точных прогнозов.", rating: 4.6, comments: 15, image: botImages[5] },
    { name: "Опционный Стратег", description: "Специализированный бот для торговли опционами. Реализует сложные опционные стратегии, адаптируясь к волатильности рынка.", rating: 4.9, comments: 30, image: botImages[6] },
    { name: "Портфельный Оптимизатор", description: "Бот для автоматического управления инвестиционным портфелем. Распределяет активы для достижения максимальной доходности при заданном уровне риска.", rating: 4.3, comments: 10, image: botImages[7] },
    { name: "Арбитражный Бот", description: "Использует разницу в ценах на разных биржах для получения прибыли. Работает с минимальной задержкой, обеспечивая высокую эффективность.", rating: 4.4, comments: 20, image: botImages[8] },
    { name: "Квантовый Трейдер", description: "Передовой бот, использующий методы машинного обучения для прогнозирования движения цен. Постоянно обучается и адаптируется к новым рыночным условиям.", rating: 5.0, comments: 35, image: botImages[9] },
    { name: "Валютный Спекулянт", description: "Бот для краткосрочных спекуляций на валютных рынках. Быстро реагирует на новостные события и изменения ликвидности.", rating: 4.0, comments: 5, image: botImages[10] },
    { name: "Долгосрочный Инвестор", description: "Бот для формирования долгосрочного инвестиционного портфеля. Ориентирован на фундаментальный анализ и стабильный рост активов.", rating: 4.9, comments: 22, image: botImages[11] },
    { name: "ИИ-Трейдер Акций", description: "Бот на основе искусственного интеллекта для торговли акциями. Анализирует большие объемы данных для прогнозирования движения цен.", rating: 4.7, comments: 28, image: botImages[12] },
    { name: "Облигационный Оптимизатор", description: "Бот для оптимизации портфеля облигаций. Учитывает доходность, срок погашения и кредитный рейтинг для максимальной эффективности.", rating: 4.5, comments: 10, image: botImages[13] },
    { name: "Фьючерсный Аналитик", description: "Бот для анализа и торговли фьючерсными контрактами. Использует технический анализ и объем торгов для определения трендов.", rating: 4.6, comments: 17, image: botImages[14] },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 3;
  const carouselRef = useRef(null);
  const autoScrollIntervalRef = useRef(null);

  // Refs for sections to observe
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const featuresRef = useRef(null);
  const showcaseRef = useRef(null);

  // State to track visibility of sections
  const [heroVisible, setHeroVisible] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [section1Visible, setSection1Visible] = useState(false);
  const [section2Visible, setSection2Visible] = useState(false);
  const [section3Visible, setSection3Visible] = useState(false);
  const [section4Visible, setSection4Visible] = useState(false);
  const [featuresVisible, setFeaturesVisible] = useState(false);
  const [showcaseVisible, setShowcaseVisible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1, // Trigger when 10% of the section is visible
    };

    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          switch (entry.target.id) {
            case 'hero': setHeroVisible(true); break;
            case 'about': setAboutVisible(true); break;
            case 'section1': setSection1Visible(true); break;
            case 'section2': setSection2Visible(true); break;
            case 'section3': setSection3Visible(true); break;
            case 'section4': setSection4Visible(true); break;
            case 'features': setFeaturesVisible(true); break;
            case 'showcase': setShowcaseVisible(true); break;
            default: break;
          }
          observer.unobserve(entry.target); // Stop observing once visible
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe each section
    if (heroRef.current) observer.observe(heroRef.current);
    if (aboutRef.current) observer.observe(aboutRef.current);
    if (section1Ref.current) observer.observe(section1Ref.current);
    if (section2Ref.current) observer.observe(section2Ref.current);
    if (section3Ref.current) observer.observe(section3Ref.current);
    if (section4Ref.current) observer.observe(section4Ref.current);
    if (featuresRef.current) observer.observe(featuresRef.current);
    if (showcaseRef.current) observer.observe(showcaseRef.current);

    return () => {
      // Disconnect observer on unmount
      observer.disconnect();
    };
  }, []);

  const handlePrev = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.children[0].offsetWidth;
      const gapWidth = 50; // gap-8 is 2rem, which is 32px, but carousel uses 50px
      const scrollAmount = cardWidth + gapWidth;
      const currentScrollLeft = carouselRef.current.scrollLeft;
      const maxScrollLeft = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;

      if (currentScrollLeft <= 0) {
        // If at the beginning, go to the end
        carouselRef.current.scrollTo({ left: maxScrollLeft, behavior: 'smooth' });
      } else {
        // Otherwise, scroll back by one card
        carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.children[0].offsetWidth;
      const gapWidth = 50; // gap-8 is 2rem, which is 32px, but carousel uses 50px
      const scrollAmount = cardWidth + gapWidth;
      const currentScrollLeft = carouselRef.current.scrollLeft;
      const maxScrollLeft = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;

      if (currentScrollLeft + carouselRef.current.clientWidth >= maxScrollLeft) {
        // If at the end, go to the beginning
        carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        // Otherwise, scroll forward by one card
        carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const startAutoScroll = () => {
      autoScrollIntervalRef.current = setInterval(() => {
        if (carouselRef.current) {
          const cardWidth = carouselRef.current.children[0].offsetWidth;
          const gapWidth = 32;
          const scrollAmount = cardWidth + gapWidth;
          const maxScrollLeft = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;

          if (carouselRef.current.scrollLeft + scrollAmount >= maxScrollLeft) {
            carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
          }
        }
      }, 30000); // 3 секунды
    };

    startAutoScroll(); // Start auto-scroll on mount

    return () => {
      clearInterval(autoScrollIntervalRef.current); // Clear interval on unmount
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return (
    <div className="bg-white font-open-sans text-text-black">
      {/* Header */}
      <header className="sticky top-0 bg-white/80 backdrop-blur-sm z-10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-4">
            <Logo className="h-10 w-10"/>
            <span className="font-tt-travels text-2xl font-bold">AlgoVerse</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about').scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-main">О нас</a>
            <a href="#features" onClick={(e) => { e.preventDefault(); document.getElementById('features').scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-main">Возможности</a>
            <a href="#showcase" onClick={(e) => { e.preventDefault(); document.getElementById('showcase').scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-main">Витрина</a>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="text" onClick={() => onNavigate('app')}>Войти</Button>
            <Button variant="big-classic" onClick={() => onNavigate('register')}>Регистрация</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" ref={heroRef} className={`text-center py-20 px-6 bg-bg-light ${heroVisible ? 'fade-in-up' : 'section-hidden'}`} style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/backgroundImage.svg)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <h1 className="font-tt-travels text-5xl font-bold mb-4">Создавайте. Тестируйте. Запускайте.</h1>
        <p className="text-xl text-text-grey max-w-6xl mx-auto mb-8">Платформа, где ваши алгоритмы превращаются в живую силу, способную зарабатывать 24/7.
Гибкий инструментарий, автоматизация, мгновенное развертывание — всё, чтобы вы могли сосредоточиться на стратегии, а не на рутине.</p>
        <Button variant="big-with-arrow" iconPosition="left" iconClass="ml-4" onClick={() => onNavigate('register')}> 
          Присоединиться 
        </Button>
      </section>
      
      {/* Placeholder Sections */}
      <section id="about" ref={aboutRef} className={`bg-bg-light py-20 px-6 ${aboutVisible ? 'fade-in-up' : 'section-hidden'}`}>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className={`w-full md:w-1/2 text-left md:pl-16 order-last md:order-none ${aboutVisible ? 'slide-in-left' : 'section-hidden'}`}>
                <h2 className="font-tt-travels text-3xl font-bold mb-4">О проекте</h2>
                <p className="text-lg text-text-grey max-w-5xl">Мы верим, что автоматическая торговля — это не удел избранных и не магия с Уолл-стрит. Это инструмент, который должен быть доступен каждому, у кого есть идея и желание проверить её в деле. Мы создали платформу нового поколения, чтобы вы могли сосредоточиться на главном — на стратегии, логике и принятии решений, а всё остальное доверить инфраструктуре.</p>
            </div>
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className={`w-full md:w-1/2 text-left md:pl-16 order-last md:order-none ${aboutVisible ? 'slide-in-left' : 'section-hidden'}`}>
                <h2 className="font-tt-travels text-3xl font-bold mb-4">О проекте</h2>
                <p className="text-lg text-text-grey max-w-5xl">Мы верим, что автоматическая торговля — это не удел избранных и не магия с Уолл-стрит. Это инструмент, который должен быть доступен каждому, у кого есть идея и желание проверить её в деле. Мы создали платформу нового поколения, чтобы вы могли сосредоточиться на главном — на стратегии, логике и принятии решений, а всё остальное доверить инфраструктуре.</p>
            </div>
            <div className={`w-full md:w-1/2 flex justify-center mt-8 md:mt-0 order-first md:order-none ${aboutVisible ? 'slide-in-right' : 'section-hidden'}`}>
                <img src={`${process.env.PUBLIC_URL}/container.svg`} alt="Container" className="max-w-full h-auto" />
            </div>
        </div>
        </div>
      </section>

      <section id="section1" ref={section1Ref} className={`bg-white py-20 px-6 ${section1Visible ? 'fade-in-up' : 'section-hidden'}`}>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className={`w-full md:w-1/2 flex justify-center order-first md:order-none mt-8 md:mt-0 ${section1Visible ? 'slide-in-left' : 'section-hidden'}`}>
                <img src={`${process.env.PUBLIC_URL}/34укый234ы 1.svg`} alt="Section 1 Image" className="max-w-full h-auto" />
            </div>
            <div className={`w-full md:w-1/2 text-left md:pl-16 order-last md:order-none ${section1Visible ? 'slide-in-right' : 'section-hidden'}`}>
                <h2 className="font-tt-travels text-3xl font-bold mb-4">От идеи до результата — за часы, а не недели</h2>
                <p className="text-lg text-text-grey mb-4">Наша платформа избавляет от рутины: никаких серверов, интеграций и технической мороки. Просто заходите, создавайте стратегию — с нуля или на базе готового решения — и запускайте её в работу. Тестирование на истории или в реальном времени, мгновенное развертывание, удобный интерфейс — всё, чтобы вы могли сосредоточиться на главном: логике и эффективности.</p>
            </div>
        </div>
      </section>

      <section id="section2" ref={section2Ref} className={`bg-bg-light py-20 px-6 ${section2Visible ? 'fade-in-up' : 'section-hidden'}`}>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className={`w-full md:w-1/2 text-left md:pl-16 order-last md:order-none ${section2Visible ? 'slide-in-left' : 'section-hidden'}`}>
                <h2 className="font-tt-travels text-3xl font-bold mb-4">Больше, чем просто боты</h2>
                <p className="text-lg text-text-grey mb-4">Мы не ограничиваемся инструментами. Мы строим экосистему: готовые боты, гибкая кастомизация, автокопирование сделок, сигналы, аналитика и дашборд, где вся активность — под контролем. Это не просто платформа, а место, где идеи превращаются в результат.</p>
            </div>
            <div className={`w-full md:w-1/2 flex justify-center mt-8 md:mt-0 order-first md:order-none ${section2Visible ? 'slide-in-right' : 'section-hidden'}`}>
                <img src={`${process.env.PUBLIC_URL}/Frame 7460.svg`} alt="Section 2 Image" className="max-w-full h-auto" />
            </div>
        </div>
      </section>

      <section id="section3" ref={section3Ref} className={`bg-white py-20 px-6 ${section3Visible ? 'fade-in-up' : 'section-hidden'}`}>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className={`w-full md:w-1/2 flex justify-center order-first md:order-none mt-8 md:mt-0 ${section3Visible ? 'slide-in-left' : 'section-hidden'}`}>
                <img src={`${process.env.PUBLIC_URL}/followers_empty.svg`} alt="Section 3 Image" className="w-[400px] h-[250px]" />
            </div>
            <div className={`w-full md:w-1/2 text-left md:pl-16 order-last md:order-none ${section3Visible ? 'slide-in-right' : 'section-hidden'}`}>
                <h2 className="font-tt-travels text-3xl font-bold mb-4">Кто мы</h2>
                <p className="text-lg text-text-grey">Мы — команда, которая знает рынок изнутри. За плечами годы в алгоритмической торговле и управлении фондами с капиталом свыше 100 миллионов долларов. Мы запускали стратегии в реальный бой, переживали просадки, били рекорды и каждый день принимали решения, от которых зависели чужие деньги. Нас объединило разочарование в громоздких и устарелых решениях. Мы создаём платформу не как ещё один инструмент, а как среду для тех, кто ценит скорость, гибкость и контроль. Здесь всё построено вокруг смысла: от первой строки кода до последней кнопки в интерфейсе.</p>
            </div>
        </div>
      </section>

      <section id="section4" ref={section4Ref} className={`bg-bg-light py-20 px-6 ${section4Visible ? 'fade-in-up' : 'section-hidden'}`}>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className={`w-full md:w-1/2 text-left md:pl-16 order-last md:order-none ${section4Visible ? 'slide-in-left' : 'section-hidden'}`}>
                <h2 className="font-tt-travels text-3xl font-bold mb-4">Наше видедение</h2>
                <p className="text-lg text-text-grey mb-4">Мы верим в мир, где алгоритмическая торговля — это инструмент для всех. Где стратегии можно тестировать и запускать за часы, без технических сложностей. Где алгоритмы живут, развиваются и работают на вас.</p>
                <p className="text-lg text-text-grey" style={{ marginTop: '15px' }}>И если вам близко это будущее — добро пожаловать.</p>
            </div>
            <div className={`w-full md:w-1/2 flex justify-center mt-8 md:mt-0 order-first md:order-none ${section4Visible ? 'slide-in-right' : 'section-hidden'}`}>
                <img src={`${process.env.PUBLIC_URL}/Frame 7461.svg`} alt="Section 4 Image" className="max-w-full h-auto" />
            </div>
        </div>
      </section>

      <section id="features" ref={featuresRef} className={`container mx-auto px-6 py-20 ${featuresVisible ? 'fade-in-up' : 'section-hidden'}`}>
        <h2 className="font-tt-travels text-4xl font-bold text-center mb-12">Что мы предлагаем?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-bg-light p-8 rounded-2xl text-center ${featuresVisible ? 'fade-in-up' : 'section-hidden'}">
            <img src={`${process.env.PUBLIC_URL}/34653 1.svg`} alt="Feature Icon" className="w-[70px] h-[70px] mx-auto mb-4" />
            <h3 className="font-tt-travels text-2xl font-bold mb-4">Свои боты</h3>
            <p className="text-text-grey">Создавайте торговых ботов за минуты — просто, быстро и без кода. Готовых можно сразу опубликовать на платформе и подключить к партнёрской программе для продвижения.</p>
          </div>
          <div className="bg-bg-light p-8 rounded-2xl text-center ${featuresVisible ? 'fade-in-up' : 'section-hidden'}">
            <img src={`${process.env.PUBLIC_URL}/assets_task_01jye5yc7pe6w9d2y08qzdf1xt_1750675239_img_1 1.svg`} alt="Feature Icon" className="w-[70px] h-[70px] mx-auto mb-4" />
            <h3 className="font-tt-travels text-2xl font-bold mb-4">Копируй и зарабатывай</h3>
            <p className="text-text-grey">Автоматически повторяйте сделки лучших стратегий. Настраивайте риски, следите за результатами в реальном времени, получайте прибыль синхронно с топами.</p>
          </div>
           <div className="bg-bg-light p-8 rounded-2xl text-center ${featuresVisible ? 'fade-in-up' : 'section-hidden'}">
            <img src={`${process.env.PUBLIC_URL}/25к3ц45к2й34 1.svg`} alt="Feature Icon" className="w-[70px] h-[70px] mx-auto mb-4" />
            <h3 className="font-tt-travels text-2xl font-bold mb-4">Контроль и рост</h3>
            <p className="text-text-grey">Единый дашборд с полной аналитикой по ботам, доходности и действиям. Прозрачность, масштабирование и понимание — всё, чтобы расти уверенно.</p>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section id="showcase" ref={showcaseRef} className={`container mx-auto px-6 py-20 ${showcaseVisible ? 'fade-in-up' : 'section-hidden'}`}>
        <h2 className="font-tt-travels text-4xl font-bold text-center mb-4">Витрина алго-ботов</h2>
        <p className="text-center text-text-grey max-w-4xl mx-auto mb-12">Здесь вы можете ознакомиться с представленными на платформе алго-ботами и экспертами. Они доступны как бесплатно, так и платно, в зависимости от автора и продукта, имеют простой вид и понятное описание с инструкциями.</p>
        <div className="relative px-8">
          <div
            className="flex overflow-x-scroll snap-x snap-mandatory gap-[-10px] scroll-smooth"
            ref={carouselRef}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseEnter={() => clearInterval(autoScrollIntervalRef.current)}
            onMouseLeave={() => {
              autoScrollIntervalRef.current = setInterval(() => {
                if (carouselRef.current) {
                  const cardWidth = carouselRef.current.children[0].offsetWidth;
                  const gapWidth = 50;
                  const scrollAmount = cardWidth + gapWidth;
                  const maxScrollLeft = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;

                  if (carouselRef.current.scrollLeft + scrollAmount >= maxScrollLeft) {
                    carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                  } else {
                    carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                  }
                }
              }, 3000);
            }}
          >
            {botData.map((bot, index) => (
              <div key={index} className="flex-none w-full sm:w-1/2 md:w-1/3 lg:w-[calc((100%-100px)/3)] bg-white p-6 rounded-2xl shadow-lg flex flex-col snap-start">
                <div className="relative mb-4">
                  <img src={bot.image} alt={bot.name} className="w-full h-32 object-cover rounded-lg"/>
                  <div className="absolute top-2 left-2 flex items-center bg-white rounded-full px-2 py-1 shadow-md">
                    <ICONS.favorites className="w-4 h-4 text-yellow-500 mr-1"/>
                    <span className="text-sm font-semibold">{bot.rating}</span>
                  </div>
                  <div className="absolute top-2 left-16 flex items-center bg-white rounded-full px-2 py-1 shadow-md">
                    <ICONS.messages className="w-4 h-4 text-blue-500 mr-1"/>
                    <span className="text-sm font-semibold">{bot.comments}</span>
                  </div>
                </div>
                <h3 className="font-tt-travels text-xl font-bold mb-2">{bot.name}</h3>
                <p className="text-text-grey text-sm mb-4 flex-grow">{bot.description}</p>
                <Button variant="big-classic" className="w-full" onClick={() => onNavigate('register')}>Купить</Button>
              </div>
            ))}
          </div>
          <Button variant="icon" className="absolute top-1/2 left-0 -translate-y-1/2 bg-white/80 backdrop-blur-sm shadow-lg p-4" onClick={handlePrev}><ICONS.arrowLeft /></Button>
          <Button variant="icon" className="absolute top-1/2 right-0 -translate-y-1/2 bg-white/80 backdrop-blur-sm shadow-lg p-4" onClick={handleNext}><ICONS.arrowRight /></Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8 px-6">
        <div className="container mx-auto text-center text-text-grey">
          <p>&copy; {new Date().getFullYear()} AlgoVerse. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

const LoginPage = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [generalError, setGeneralError] = useState('');

  const handleGoBack = () => {
    onNavigate('landing');
  };


  const handleLogin = async (e) => {
    e.preventDefault();
    setEmailError('');
    setPasswordError('');
    setGeneralError('');

    if (!email) {
      setEmailError('Email не может быть пустым.');
      return;
    }
    if (!password) {
      setPasswordError('Пароль не может быть пустым.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Login successful:', data.message);
        onNavigate('app');
      } else {
        console.error('Login failed:', data.message);
        if (data.message.includes('email')) {
          setEmailError(data.message);
        } else if (data.message.includes('password')) {
          setPasswordError(data.message);
        } else {
          setGeneralError(data.message);
        }
      }
    } catch (error) {
      console.error('Network error:', error);
      setGeneralError('Ошибка сети. Пожалуйста, попробуйте позже.');
    }
  };

  return (
    <div className="bg-bg-light min-h-screen flex items-center justify-center p-4 sm:p-6 relative">
      <div className="absolute top-4 left-4 sm:top-6 sm:top-6 sm:left-6">
        <Button variant="icon" onClick={handleGoBack} className="bg-grey-2/50 hover:bg-grey-2 active:bg-grey-3">
          <ICONS.arrowLeft />
        </Button>
      </div>
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg max-w-sm w-full text-center">
        <h1 className="font-tt-travels text-3xl font-bold mb-2">Вход</h1>
        <p className="text-text-grey mb-6">Войдите в свой аккаунт.</p>
        <form onSubmit={handleLogin}>
          <div className="space-y-4 mb-6">
            <div>
              <input
                type="email"
                placeholder="Email"
                className={`w-full p-3 border rounded-lg ${emailError ? 'border-red-500' : 'border-grey-2'}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <p className="text-red-500 text-sm mt-1 text-left">{emailError}</p>}
            </div>
            <div>
              <input
                type="password"
                placeholder="Пароль"
                className={`w-full p-3 border rounded-lg ${passwordError ? 'border-red-500' : 'border-grey-2'}`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && <p className="text-red-500 text-sm mt-1 text-left">{passwordError}</p>}
            </div>
          </div>
          {generalError && <p className="text-red-500 text-sm mb-4">{generalError}</p>}
          <Button variant="big-classic" className="w-full" type="submit">Войти</Button>
        </form>
        <p className="mt-4 text-sm text-text-grey">
          Ещё нет аккаунта? <Button variant="text" onClick={() => onNavigate('register')}>Регистрация</Button>
        </p>
      </div>
    </div>
  );
};

const RegistrationPage = ({ onNavigate }) => {
  const handleGoBack = () => {
    onNavigate('landing');
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [generalError, setGeneralError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');
    setGeneralError('');

    let hasError = false;
    if (!email) {
      setEmailError('Email не может быть пустым.');
      hasError = true;
    }
    if (!password) {
      setPasswordError('Пароль не может быть пустым.');
      hasError = true;
    }
    if (!confirmPassword) {
      setConfirmPasswordError('Повторите пароль.');
      hasError = true;
    }
    if (password && confirmPassword && password !== confirmPassword) {
      setConfirmPasswordError('Пароли не совпадают.');
      hasError = true;
    }

    if (hasError) {
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Registration successful:', data.message);
        onNavigate('app'); // Переходим на дашборд после успешной регистрации
      } else {
        console.error('Registration failed:', data.message);
        if (data.message.includes('email')) {
          setEmailError(data.message);
        } else if (data.message.includes('password')) {
          setPasswordError(data.message);
        } else {
          setGeneralError(data.message);
        }
      }
    } catch (error) {
      console.error('Network error:', error);
      setGeneralError('Ошибка сети. Пожалуйста, попробуйте позже.');
    }
  };

  return (
    <div className="bg-bg-light min-h-screen flex items-center justify-center p-4 sm:p-6 relative">
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
        <Button variant="icon" onClick={handleGoBack} className="bg-grey-2/50 hover:bg-grey-2 active:bg-grey-3">
          <ICONS.arrowLeft />
        </Button>
      </div>
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg max-w-sm w-full text-center">
        <h1 className="font-tt-travels text-3xl font-bold mb-2">Регистрация</h1>
        <p className="text-text-grey mb-6">Создайте аккаунт, чтобы начать.</p>
        <form onSubmit={handleRegister}>
          <div className="space-y-4 mb-6">
            <div>
              <input
                type="email"
                placeholder="Email"
                className={`w-full p-3 border rounded-lg ${emailError ? 'border-red-500' : 'border-grey-2'}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <p className="text-red-500 text-sm mt-1 text-left">{emailError}</p>}
            </div>
            <div>
              <input
                type="password"
                placeholder="Пароль"
                className={`w-full p-3 border rounded-lg ${passwordError ? 'border-red-500' : 'border-grey-2'}`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && <p className="text-red-500 text-sm mt-1 text-left">{passwordError}</p>}
            </div>
            <div>
              <input
                type="password"
                placeholder="Повторите пароль"
                className={`w-full p-3 border rounded-lg ${confirmPasswordError ? 'border-red-500' : 'border-grey-2'}`}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {confirmPasswordError && <p className="text-red-500 text-sm mt-1 text-left">{confirmPasswordError}</p>}
            </div>
          </div>
          {generalError && <p className="text-red-500 text-sm mb-4">{generalError}</p>}
          <Button variant="big-classic" className="w-full" type="submit">Создать аккаунт</Button>
        </form>
        <p className="mt-4 text-sm text-text-grey">
          Уже есть аккаунт? <Button variant="text" onClick={() => onNavigate('login')}>Войти</Button>
        </p>
      </div>
    </div>
  );
};

//=========== ОСНОВНЫЕ КОМПОНЕНТЫ ПРИЛОЖЕНИЯ (ДАШБОРД) ===========//

const Sidebar = ({ activePage, onNavigate, isMobileMenuOpen, setMobileMenuOpen }) => {
  const sidebarContent = (
    <>
      <div className="p-4">
        <a href="/" onClick={(e) => { e.preventDefault(); onNavigate('Главная'); setMobileMenuOpen(false); }} className="flex items-center gap-4">
          <Logo className="h-10 w-10"/>
          <span className="font-tt-travels text-2xl font-bold text-text-black">AlgoVerse</span>
        </a>
      </div>
      <nav className="flex-grow px-4 mt-8 pb-6">
        <div className="space-y-2">
          {['Лента', 'Маркетплейс', 'Персоны'].map((item) => (
            <a key={item} href="#" onClick={(e) => { e.preventDefault(); onNavigate(item); setMobileMenuOpen(false); }} className={`flex items-center gap-5 px-4 py-3 rounded-lg transition-colors ${activePage === item ? 'bg-main text-white' : 'text-text-grey hover:bg-grey-2/50 hover:text-text-black'}`}>
              {React.createElement(ICONS[{'Лента': 'feed', 'Маркетплейс': 'marketplace', 'Персоны': 'persons'}[item]])}
              <span className="font-open-sans font-semibold">{item}</span>
            </a>
          ))}
        </div>
        <hr className="my-4 border-grey-2" />
        <div className="space-y-2">
          {['Рабочий стол', 'Сообщения', 'Избранное'].map((item) => (
            <a key={item} href="#" onClick={(e) => { e.preventDefault(); onNavigate(item); setMobileMenuOpen(false); }} className={`flex items-center gap-5 px-4 py-3 rounded-lg transition-colors ${activePage === item ? 'bg-main text-white' : 'text-text-grey hover:bg-grey-2/50 hover:text-text-black'}`}>
              {React.createElement(ICONS[{'Рабочий стол': 'desktop', 'Сообщения': 'messages', 'Избранное': 'favorites'}[item]])}
              <span className="font-open-sans font-semibold">{item}</span>
            </a>
          ))}
        </div>
        <hr className="my-4 border-grey-2" />
        <div className="space-y-2">
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('Помощь'); setMobileMenuOpen(false); }} className={`flex items-center gap-5 px-4 py-3 rounded-lg transition-colors ${activePage === 'Помощь' ? 'bg-main text-white' : 'text-text-grey hover:bg-grey-2/50 hover:text-text-black'}`}>
            <ICONS.help />
            <span className="font-open-sans font-semibold">Помощь</span>
          </a>
        </div>
      </nav>
    </>
  );

  return (
    <>
      <aside className="hidden lg:flex lg:flex-col w-64 bg-white rounded-2xl m-4 flex-shrink-0">{sidebarContent}</aside>
      <div className={`fixed inset-0 z-40 transform lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
          <div className="w-64 h-full bg-white shadow-lg flex flex-col">{sidebarContent}</div>
      </div>
      {isMobileMenuOpen && <div className="fixed inset-0 bg-black/30 z-30 lg:hidden" onClick={() => setMobileMenuOpen(false)}></div>}
    </>
  );
};


const Header = ({ onOpenModal, setMobileMenuOpen, onLogout }) => {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [language, setLanguage] = useState('Русский');
  const languages = ['Русский', 'English', 'Español', '中文'];
  const notificationsRef = useRef(null);
  const profileRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationsRef.current && !notificationsRef.current.contains(event.target)) setNotificationsOpen(false);
      if (profileRef.current && !profileRef.current.contains(event.target)) setProfileOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const ProfileDropdown = () => (
    <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 z-20">
      <div className="py-1">
        <a href="#" className="flex items-center px-4 py-2 text-sm text-text-grey hover:bg-grey-2/50"><img src={UnionIcon} alt="Профиль" className="w-4 h-4 mr-2"/>Профиль</a>
        <a href="#" className="flex items-center px-4 py-2 text-sm text-text-grey hover:bg-grey-2/50"><img src={Group12Icon} alt="Настройки аккаунта" className="w-4 h-4 mr-2"/>Настройки аккаунта</a>
        <a href="#" className="flex items-center px-4 py-2 text-sm text-text-grey hover:bg-grey-2/50"><PersonsIcon className="w-4 h-4 mr-2"/>Партнерская программа</a>
        <a href="#" className="flex items-center px-4 py-2 text-sm text-text-grey hover:bg-grey-2/50"><WalletIcon className="w-4 h-4 mr-2"/>Кошелек</a>
        <div className="border-t border-grey-2 my-1"></div>
        <div className="flex items-center px-4 py-2 text-sm text-text-grey">
          <SiteIcon className="w-4 h-4 mr-2"/>
          <span className="mr-2">Язык:</span>
          <select value={language} onChange={(e) => setLanguage(e.target.value)} className="bg-transparent font-semibold">
            {languages.map(lang => <option key={lang} value={lang}>{lang}</option>)}
          </select>
        </div>
        <div className="border-t border-grey-2 my-1"></div>
        <a href="#" onClick={(e) => { e.preventDefault(); onLogout(); }} className="flex items-center px-4 py-2 text-sm text-main hover:bg-grey-2/50"><ExitIcon className="w-4 h-4 mr-2"/>Выйти из аккаунта</a>
      </div>
    </div>
  );

  const NotificationDropdown = () => (
    <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 z-20">
      <div className="p-4 font-bold border-b border-grey-2">Уведомления</div>
      <div className="py-2 max-h-80 overflow-y-auto">
        <div className="px-4 py-2 hover:bg-grey-2/50"><p className="font-semibold text-sm">Ваш бот "Super Scalper" был опубликован!</p><p className="text-xs text-text-grey">2 минуты назад</p></div>
        <div className="px-4 py-2 hover:bg-grey-2/50"><p className="font-semibold text-sm">Верификация личности успешно пройдена.</p><p className="text-xs text-text-grey">1 час назад</p></div>
        <div className="px-4 py-2 hover:bg-grey-2/50"><p className="font-semibold text-sm">Новое сообщение от поддержки.</p><p className="text-xs text-text-grey">3 часа назад</p></div>
      </div>
      <div className="p-2 border-t border-grey-2 text-center"><Button variant="text" className="text-sm">Смотреть все уведомления</Button></div>
    </div>
  );

  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-4 z-20 mx-4 lg:mx-0 rounded-2xl shadow-sm">
      <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between md:justify-start md:gap-4">
        <div className="lg:hidden"><Button variant="icon" onClick={() => setMobileMenuOpen(true)}><ICONS.burger /></Button></div>
        <div className="relative flex items-center flex-grow md:flex-grow-0">
          <ICONS.search className="absolute left-3 text-text-grey w-5 h-5" />
          <input
            type="text"
            placeholder="Поиск"
            className="pl-10 pr-4 py-2 rounded-full bg-grey-1 border border-grey-2 focus:outline-none focus:border-main w-full md:w-[700px] transition-all duration-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 md:gap-4 ml-auto">
          <Button variant="big-classic" onClick={onOpenModal} className="hidden md:inline-flex"><ICONS.plus className="mr-2"/> Создать</Button>
          <Button variant="icon" onClick={onOpenModal} className="md:hidden"><ICONS.plus /></Button>
          <div className="relative" ref={notificationsRef}><Button variant="icon" onClick={() => setNotificationsOpen(o => !o)}><ICONS.bell /></Button>{notificationsOpen && <NotificationDropdown />}</div>
          <div className="relative" ref={profileRef}><Button variant="icon" onClick={() => setProfileOpen(o => !o)}><ICONS.user /></Button>{profileOpen && <ProfileDropdown />}</div>
        </div>
      </div>
    </header>
  );
};


const CreateModal = ({ isOpen, onClose, isVerified, onVerificationComplete, onProductCreated }) => {
    const [step, setStep] = useState(isVerified ? 4 : 1);
    const [docType, setDocType] = useState('Паспорт');

    useEffect(() => {
        if (isOpen) setStep(isVerified ? 4 : 1);
    }, [isOpen, isVerified]);

    if (!isOpen) return null;

    const handleNextStep = () => {
        if (step === 3) { onVerificationComplete(); setStep(4); } 
        else if (step === 4) { onProductCreated(); onClose(); } 
        else { setStep(s => s + 1); }
    };
    const handleBackStep = () => setStep(s => s - 1);

    const renderStep = () => {
        switch (step) {
            case 1: return (<><h2 className="text-2xl font-bold text-center mb-2 font-tt-travels">ПОДТВЕРЖДЕНИЕ ЛИЧНОСТИ</h2><p className="text-center text-text-grey mb-6">Выберите страну и тип документа</p><div className="mb-4"><label className="font-semibold mb-2 block">Выберите страну выдачи документа</label><select className="w-full p-3 border border-grey-2 rounded-lg"><option>Россия</option><option>Казахстан</option></select></div><div className="mb-6"><label className="font-semibold mb-2 block">Выберите тип документа</label><div className="grid grid-cols-2 gap-4">{['Паспорт', 'Водительское удостоверение', 'ID карта', 'Вид на жительство'].map(type => (<label key={type} className={`flex items-center p-3 border rounded-lg cursor-pointer ${docType === type ? 'border-main bg-main/10' : 'border-grey-2'}`}><input type="radio" name="docType" value={type} checked={docType === type} onChange={() => setDocType(type)} className="form-radio text-main focus:ring-main" /><span className="ml-3 text-sm">{type}</span></label>))}</div></div><div className="bg-grey-2/30 p-4 rounded-lg text-center mb-6"><ICONS.upload className="mx-auto text-grey mb-2"/><Button variant="text">Загрузить документ</Button></div><Button variant="big-with-arrow" icon={ICONS.arrowRight} iconPosition="right" className="w-full" onClick={handleNextStep}>Следующий шаг</Button></>);
            case 2: return (<><h2 className="text-2xl font-bold text-center mb-2 font-tt-travels">3D СКАНИРОВАНИЕ ЛИЦА</h2><p className="text-center text-text-grey mb-8 max-w-sm mx-auto">Сначала посмотрите в камеру. Убедитесь, что ваше лицо полностью находится в кадре. Медленно поверните голову по кругу, чтобы завершить 3D-сканирование.</p><div className="relative w-48 h-48 mx-auto mb-8 flex items-center justify-center"><div className="absolute inset-0 border-8 border-grey-2 rounded-full"></div><div className="absolute inset-0 border-8 border-main rounded-full animate-spin" style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }}></div><img src="https://placehold.co/150x150/E2BAA4/000000?text=User" alt="User face" className="rounded-full w-40 h-40 object-cover"/></div><div className="flex gap-4"><Button variant="big-outline" className="w-full" onClick={handleBackStep}>Назад</Button><Button variant="big-classic" className="w-full" onClick={handleNextStep}>Начать</Button></div></>);
            case 3: return (<><div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center bg-light-blue/20 rounded-full"><svg className="w-12 h-12 text-light-blue animate-spin" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 18V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M4.93 4.93L7.76 7.76" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M16.24 16.24L19.07 19.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 12H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M18 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M4.93 19.07L7.76 16.24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M16.24 7.76L19.07 4.93" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div><h2 className="text-2xl font-bold text-center mb-2 font-tt-travels">Система уже проверяет ваши данные.</h2><p className="text-center text-text-grey mb-8 max-w-md mx-auto">Обычно это занимает одну-три минуты. Статус учетной записи будет автоматически изменяться после завершения проверки.</p><Button variant="big-classic" className="w-full" onClick={handleNextStep}>(Имитация) Завершить проверку</Button></>);
            case 4: return <ProductCreationForm onBack={isVerified ? null : handleBackStep} onSave={handleNextStep} />;
            default: return null;
        }
    };

    return (<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"><div className="bg-white rounded-2xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto relative"><Button variant="icon" className="absolute top-4 right-4" onClick={onClose}><ICONS.close /></Button>{renderStep()}</div></div>);
};

const ProductCreationForm = ({ onBack, onSave }) => { return (<><h2 className="text-2xl font-bold mb-6 font-tt-travels">Создание нового продукта</h2><div className="space-y-4"><div><label className="font-semibold mb-1 block">Название</label><input type="text" placeholder="Название продукта..." className="w-full p-3 border border-grey-2 rounded-lg" /></div><div><label className="font-semibold mb-1 block">Продукт</label><select className="w-full p-3 border border-grey-2 rounded-lg"><option>Эксперты</option><option>Индикаторы</option></select></div><div className="grid grid-cols-2 gap-4"><div><label className="font-semibold mb-1 block">Тип счета</label><select className="w-full p-3 border border-grey-2 rounded-lg"><option>Любой</option></select></div><div><label className="font-semibold mb-1 block">Тип эксперта</label><div className="p-3 border border-grey-2 rounded-lg space-y-2"><label className="flex items-center"><input type="checkbox" className="form-checkbox mr-2"/>Арбитражный</label><label className="flex items-center"><input type="checkbox" className="form-checkbox mr-2"/>Скальпирующий</label></div></div></div><div><label className="font-semibold mb-1 block">Цена</label><div className="space-y-2"><div className="flex items-center gap-2"><input type="checkbox" className="form-checkbox"/><input type="number" placeholder="0.00" className="w-24 p-2 border rounded-lg"/><span>USD</span><span>аренда на 1 месяц</span></div><div className="flex items-center gap-2"><input type="checkbox" className="form-checkbox"/><input type="number" placeholder="0.00" className="w-24 p-2 border rounded-lg"/><span>USD</span><span>аренда на 1 год</span></div></div></div></div><div className="flex gap-4 mt-8">{onBack && <Button variant="big-outline" onClick={onBack}>Назад</Button>}<Button variant="big-classic" className="w-full" onClick={onSave}>Сохранить черновик</Button></div></>);};

const BotDetailsPage = () => {
    const [activeTab, setActiveTab] = useState('Общая');
    const tabs = ['Общая', 'Описание', 'Скриншоты', 'Версии'];
    const renderTabContent = () => {
        switch (activeTab) {
            case 'Общая': return (<div className="p-6"><h3 className="text-xl font-bold font-tt-travels mb-4">Логотип</h3><p className="text-text-grey mb-4">Создайте для своего Продукта стильный Логотип.</p><div className="grid md:grid-cols-3 gap-6">{['Для показа в карточке:', 'Для показа на витрине:', 'Для платформы MetaTrader 5:'].map(title => (<div key={title}><p className="font-semibold mb-2">{title}</p><div className="w-full h-32 bg-grey-2/30 rounded-lg flex items-center justify-center border-2 border-dashed border-grey"><ICONS.plus className="text-grey"/></div></div>))}
            </div>
            <div className="space-y-4 mt-8">
                <div><label className="font-semibold mb-1 block">Название</label><input type="text" placeholder="Название продукта..." className="w-full p-3 border border-grey-2 rounded-lg" /></div>
                <div><label className="font-semibold mb-1 block">Продукт</label><select className="w-full p-3 border border-grey-2 rounded-lg"><option>Эксперты</option><option>Индикаторы</option></select></div>
                <div className="grid grid-cols-2 gap-4">
                    <div><label className="font-semibold mb-1 block">Тип счета</label><select className="w-full p-3 border border-grey-2 rounded-lg"><option>Любой</option></select></div>
                    <div><label className="font-semibold mb-1 block">Тип эксперта</label><div className="p-3 border border-grey-2 rounded-lg space-y-2"><label className="flex items-center"><input type="checkbox" className="form-checkbox mr-2"/>Арбитражный</label><label className="flex items-center"><input type="checkbox" className="form-checkbox mr-2"/>Скальпирующий</label></div></div>
                </div>
                <div><label className="font-semibold mb-1 block">Цена</label><div className="space-y-2"><div className="flex items-center gap-2"><input type="checkbox" className="form-checkbox"/><input type="number" placeholder="0.00" className="w-24 p-2 border rounded-lg"/><span>USD</span><span>аренда на 1 месяц</span></div><div className="flex items-center gap-2"><input type="checkbox" className="form-checkbox"/><input type="number" placeholder="0.00" className="w-24 p-2 border rounded-lg"/><span>USD</span><span>аренда на 1 год</span></div></div></div>
            </div>
            </div>);
            case 'Описание': return (<div className="p-6"><h3 className="text-xl font-bold font-tt-travels mb-4">Описание продукта</h3><p className="text-text-grey mb-4">Опишите преимущества и принципы работы Продукта.</p><div className="border border-grey-2 rounded-lg"><div className="p-2 border-b border-grey-2 bg-grey-2/30"><span className="font-bold">Русский</span></div><textarea className="w-full h-64 p-4 border-0 focus:ring-0" placeholder="Введите описание..."></textarea></div></div>);
            case 'Скриншоты': return (<div className="p-6"><h3 className="text-xl font-bold font-tt-travels mb-4">Скриншоты</h3><p className="text-text-grey mb-4">Добавьте качественные скриншоты продукта.</p><div className="w-full h-64 bg-grey-2/30 rounded-lg flex items-center justify-center border-2 border-dashed border-grey"><Button variant="text" icon={ICONS.plus}>Добавить изображение</Button></div></div>);
            case 'Версии': return (<div className="p-6"><h3 className="text-xl font-bold font-tt-travels mb-4">Версии продукта</h3><p className="text-text-grey mb-4">Загрузите файл продукта.</p><div className="w-full p-6 bg-grey-2/30 rounded-lg flex items-center justify-center border-2 border-dashed border-grey"><Button variant="text" icon={ICONS.plus}>Добавить файл продукта</Button></div></div>);
            default: return null;
        }
    };
    return (<div className="bg-white rounded-2xl shadow-sm"><div className="p-4 border-b border-grey-2"><h2 className="text-2xl font-bold font-tt-travels">Редактирование бота "Super Scalper"</h2><p className="text-text-grey">Ваш продукт находится на стадии черновика.</p></div><div className="border-b border-grey-2 flex">{tabs.map(tab => (<button key={tab} onClick={() => setActiveTab(tab)} className={`px-6 py-3 font-semibold transition-colors ${activeTab === tab ? 'text-main border-b-2 border-main' : 'text-text-grey hover:bg-grey-2/30'}`}>{tab}</button>))}
        </div><div>{renderTabContent()}</div><div className="p-4 border-t border-grey-2 flex justify-end"><Button variant="big-classic">Опубликовать</Button></div></div>);
};

const MainContent = ({ activePage, productCreated }) => {
    const renderContent = () => {
        if (productCreated) return <BotDetailsPage />;
        switch (activePage) {
            case 'Лента': return <div className="bg-white rounded-2xl p-8 shadow-sm"><h1 className="font-tt-travels text-3xl font-bold">Лента новостей</h1><p className="mt-4 text-text-grey">Здесь будет отображаться контент ленты.</p></div>;
            case 'Маркетплейс': return <div className="bg-white rounded-2xl p-8 shadow-sm"><h1 className="font-tt-travels text-3xl font-bold">Маркетплейс</h1><p className="mt-4 text-text-grey">Здесь будут карточки продуктов.</p></div>;
            case 'Персоны': return <div className="bg-white rounded-2xl p-8 shadow-sm"><h1 className="font-tt-travels text-3xl font-bold">Персоны</h1><p className="mt-4 text-text-grey">Здесь будет список персон.</p></div>;
            case 'Рабочий стол': return <div className="bg-white rounded-2xl p-8 shadow-sm"><h1 className="font-tt-travels text-3xl font-bold">Рабочий стол</h1><p className="mt-4 text-text-grey">Здесь будет ваш рабочий стол.</p></div>;
            case 'Сообщения': return <div className="bg-white rounded-2xl p-8 shadow-sm"><h1 className="font-tt-travels text-3xl font-bold">Сообщения</h1><p className="mt-4 text-text-grey">Здесь будут ваши сообщения.</p></div>;
            case 'Избранное': return <div className="bg-white rounded-2xl p-8 shadow-sm"><h1 className="font-tt-travels text-3xl font-bold">Избранное</h1><p className="mt-4 text-text-grey">Здесь будут ваши избранные элементы.</p></div>;
            case 'Помощь': return <div className="bg-white rounded-2xl p-8 shadow-sm"><h1 className="font-tt-travels text-3xl font-bold">Помощь</h1><p className="mt-4 text-text-grey">Здесь будет раздел помощи.</p></div>;
            case 'Главная': return <div className="bg-white rounded-2xl p-8 shadow-sm"><h1 className="font-tt-travels text-3xl font-bold">Главная страница</h1><p className="mt-4 text-text-grey">Здесь будет стартовая страница с картинками, видео-инструкциями и обновлениями платформы, а также новости платформы, также будут кнопки ведущие на разделы помощи для новичков и новых пользователей.</p></div>;
        }
    }
    return (<main className="flex-grow p-4 lg:p-0 lg:pt-[40px]">{renderContent()}</main>);
};

const Dashboard = ({ onLogout }) => {
  const [activePage, setActivePage] = useState('Лента');
  const [isModalOpen, setModalOpen] = useState(false);
  const [isVerified, setVerified] = useState(false);
  const [productCreated, setProductCreated] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigate = (page) => {
    setActivePage(page);
    setProductCreated(false);
  };

  return (
    <div className="bg-bg-light min-h-screen font-open-sans text-text-black">
      <div className="flex">
        <Sidebar activePage={activePage} onNavigate={handleNavigate} isMobileMenuOpen={isMobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        <div className="flex-grow flex flex-col lg:ml-4">
          <Header onOpenModal={() => setModalOpen(true)} setMobileMenuOpen={setMobileMenuOpen} onLogout={onLogout} />
          <MainContent activePage={activePage} productCreated={productCreated} />
        </div>
      </div>
      <CreateModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} isVerified={isVerified} onVerificationComplete={() => setVerified(true)} onProductCreated={() => setProductCreated(true)} />
    </div>
  );
};


//=========== ГЛАВНЫЙ КОМПОНЕНТ-РОУТЕР ===========//

export default function App() {
  const [view, setView] = useState('landing'); // 'landing', 'register', 'login', 'app'

  const handleNavigate = (targetView) => {
    setView(targetView);
  };

  const renderView = () => {
    switch (view) {
      case 'landing':
        return <LandingPage onNavigate={handleNavigate} />;
      case 'register':
        return <RegistrationPage onNavigate={handleNavigate} />;
      case 'login':
        return <LoginPage onNavigate={handleNavigate} />;
      case 'app':
        return <Dashboard onLogout={() => handleNavigate('landing')} />;
      default:
        return <LandingPage onNavigate={handleNavigate} />;
    }
  };

  return renderView();
}
