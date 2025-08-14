import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ReactComponent as Logo } from './assets/icon.svg';
import { ReactComponent as PersonsIcon } from './assets/persons.svg';
import { ReactComponent as WalletIcon } from './assets/wallet.svg';
import { ReactComponent as SiteIcon } from './assets/site.svg';
import { ReactComponent as ExitIcon } from './assets/exit.svg';
import UnionIcon from './assets/Union.png';
import Group12Icon from './assets/Group12.png';
import ReactSlider from 'react-slider';
import HelpCenterPage from './pages/HelpCenterPage';
import CommentSection from './components/CommentSection';
import DesktopPage, { SignalCard } from './pages/DesktopPage';
import SignalDetailsPage from './pages/SignalDetailsPage';
import InstrumentDetailsPage from './pages/InstrumentDetailsPage';
import QuotesSection from './components/QuotesSection';
import ProductSelectionStep from './components/ProductSelectionStep';
import AlgoBotCreationForm from './components/AlgoBotCreationForm';
import ProductDraftPage from './pages/ProductDraftPage';
import { signalData } from './pages/DesktopPage';
import NotificationsPage from './pages/NotificationsPage';
import { notificationsData } from './data/notificationsData';


//=========== ИКОНКИ (SVG) ===========//
export const ICONS = {
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
  heart: (props) => (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  star: (props) => (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  bookmark: (props) => (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
  eye: (props) => (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  repost: (props) => (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 1l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 11V9a4 4 0 0 1 4-4h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 23l-4-4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21 13v2a4 4 0 0 1-4 4H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  smiley: (props) => (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 14s1.5 2 4 2 4-2 4-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="9" y1="9" x2="9.01" y2="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="15" y1="9" x2="15.01" y2="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  send: (props) => (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="22" y1="2" x2="11" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  bold: (props) => (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  italic: (props) => (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="19" y1="4" x2="10" y2="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="14" y1="20" x2="5" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="15" y1="4" x2="9" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  underline: (props) => (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="4" y1="21" x2="20" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  strikethrough: (props) => (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4H9.5a4.5 4.5 0 0 0 0 9H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 20h6.5a4.5 4.5 0 0 0 0-9H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="4" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  alignLeft: (props) => (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="17" y1="10" x2="3" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="21" y1="6" x2="3" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="17" y1="14" x2="3" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="21" y1="18" x2="3" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  alignCenter: (props) => (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="18" y1="10" x2="6" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="21" y1="6" x2="3" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="21" y1="14" x2="3" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="18" y1="18" x2="6" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  alignRight: (props) => (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="21" y1="10" x2="7" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="21" y1="6" x2="3" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="21" y1="14" x2="3" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="21" y1="18" x2="7" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  attachFile: (props) => (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <polyline points="14 2 14 8 20 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  attachVideo: (props) => (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="23 7 16 12 23 17 23 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  attachImage: (props) => (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <polyline points="21 15 16 10 5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  book: (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20v2H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v15H6.5A2.5 2.5 0 0 1 4 14.5z"/></svg>
  ),
  plusCircle: (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
  ),
  users: (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
  ),
};

const botImages = [
  `${process.env.PUBLIC_URL}/1626182958_13-kartinkin-com-p-treider-art-art-krasivo-15.jpg`,
  `${process.env.PUBLIC_URL}/images.jpg`,
  `${process.env.PUBLIC_URL}/images (1).jpg`,
  `${process.env.PUBLIC_URL}/images (2).jpg`,
  `${process.env.PUBLIC_URL}/images (3).jpg`,
  `${process.env.PUBLIC_URL}/images (4).jpg`,
  `${process.env.PUBLIC_URL}/images (5).jpg`,
  `${process.env.PUBLIC_URL}/images (6).jpg`,
  `${process.env.PUBLIC_URL}/images (7).jpg`,
  `${process.env.PUBLIC_URL}/images (8).jpg`,
  `${process.env.PUBLIC_URL}/images (9).jpg`,
  `${process.env.PUBLIC_URL}/2.jpg`,
  `${process.env.PUBLIC_URL}/3.jpg`,
  `${process.env.PUBLIC_URL}/4.jpg`,
  `${process.env.PUBLIC_URL}/5.jpg`,
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

const quotesData = [
  { name: 'EUR/USD', price: '1.0732', change: '+0.12%', changeType: 'positive', segment: 'Валюты', tradingViewSymbol: 'FX_IDC:EURUSD' },
  { name: 'GBP/USD', price: '1.2458', change: '+0.08%', changeType: 'positive', segment: 'Валюты', tradingViewSymbol: 'FX_IDC:GBPUSD' },
  { name: 'USD/JPY', price: '154.28', change: '-0.15%', changeType: 'negative', segment: 'Валюты', tradingViewSymbol: 'FX_IDC:USDJPY' },
  { name: 'USD/CHF', price: '0.9050', change: '+0.05%', changeType: 'positive', segment: 'Валюты', tradingViewSymbol: 'FX_IDC:USDCHF' },
  { name: 'BTC/USD', price: '63,450.12', change: '+2.5%', changeType: 'positive', segment: 'Криптовалюты', tradingViewSymbol: 'BINANCE:BTCUSDT' },
  { name: 'ETH/USD', price: '3,050.78', change: '+1.8%', changeType: 'positive', segment: 'Криптовалюты', tradingViewSymbol: 'BINANCE:ETHUSDT' },
  { name: 'LTC/USD', price: '82.45', change: '-0.5%', changeType: 'negative', segment: 'Криптовалюты', tradingViewSymbol: 'BINANCE:LTCUSDT' },
  { name: 'USDT/USD', price: '1.00', change: '+0.01%', changeType: 'positive', segment: 'Криптовалюты', tradingViewSymbol: 'BINANCE:USDTUSD' },
  { name: 'MOEX', price: '3,450.12', change: '-0.30%', changeType: 'negative', segment: 'Фондовый рынок', tradingViewSymbol: 'MOEX:IMOEX' },
  { name: 'S&P 500', price: '5,070.55', change: '+0.14%', changeType: 'positive', segment: 'Фондовый рынок', tradingViewSymbol: 'SP:SPX' },
  { name: 'NASDAQ', price: '15,712.75', change: '+0.11%', changeType: 'positive', segment: 'Фондовый рынок', tradingViewSymbol: 'NASDAQ:NDX' },
  { name: 'DAX', price: '17,770.02', change: '+0.20%', changeType: 'positive', segment: 'Фондовый рынок', tradingViewSymbol: 'XETR:DAX' },
];

const QuotesTicker = ({ onInstrumentClick }) => {
  const segments = ['Валюты', 'Криптовалюты', 'Фондовый рынок'];

  return (
    <div className="bg-white rounded-2xl shadow-sm p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {segments.map(segment => (
          <div key={segment}>
            <h3 className="font-bold text-lg mb-2 px-2">{segment}</h3>
            <div className="space-y-2">
              {quotesData.filter(item => item.segment === segment).map(item => (
                <button key={item.name} onClick={() => onInstrumentClick(item)} className="w-full flex justify-between items-center p-2 rounded-lg hover:bg-grey-1/50">
                  <span className="font-semibold">{item.name}</span>
                  <div className='text-right'>
                    <span className="font-semibold">{item.price}</span>
                    <span className={`ml-2 text-sm font-semibold ${item.changeType === 'positive' ? 'text-green-500' : 'text-red-500'}`}>
                      {item.change}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


const brokerAds = [
  { name: 'АТОН', image: botImages[5] },
  { name: 'БКС инвестиции', image: botImages[6] },
  { name: 'цифра брокер', image: botImages[7] },
  { name: 'Альфа инвестиции', image: botImages[8] },
];

//=========== КОМПОНЕНТЫ UI (КНОПКИ И Т.Д.) ===========//

export const Button = ({ children, variant = 'big-classic', icon: Icon, iconPosition = 'left', className = '', disabled, iconClass = '', ...props }) => {
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

  const effectiveClassName = variant ? `${baseStyles} ${variantStyles[variant]} ${className}` : `${baseStyles} ${className}`;

  return (
    <button className={effectiveClassName} disabled={disabled} {...props}>
      {Icon && iconPosition === 'left' && <Icon className={iconClass || "mr-2"} />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className={iconClass || "ml-2"} />}
    </button>
  );
};

//=========== НОВЫЕ КОМПОНЕНТЫ: ЛЕНДИНГ И РЕГИСТРАЦИЯ ===========//

const LandingPage = ({ onNavigate, botData, botImages }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
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
      <header className="sticky top-0 bg-white shadow-md z-20">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-4">
            <Logo className="h-10 w-10"/>
            <span className="font-tt-travels text-2xl font-bold hidden sm:inline">TOT Algo</span>
          </button>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about').scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-main">О нас</a>
            <a href="#features" onClick={(e) => { e.preventDefault(); document.getElementById('features').scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-main">Возможности</a>
            <a href="#showcase" onClick={(e) => { e.preventDefault(); document.getElementById('showcase').scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-main">Витрина</a>
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <Button variant="text" onClick={() => onNavigate('app')}>Войти</Button>
            <Button variant="big-classic" onClick={() => onNavigate('register')}>Регистрация</Button>
          </div>
          <div className="md:hidden">
            <Button variant="icon" onClick={() => setMobileMenuOpen(true)}>
              {React.createElement(ICONS.burger)}
            </Button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className={`fixed inset-0 z-50 bg-white bg-opacity-100 p-6 transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
            <div className="flex justify-between items-center mb-8">
                <button onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-4">
                    <Logo className="h-10 w-10"/>
                    <span className="font-tt-travels text-2xl font-bold">TOT Algo</span>
                </button>
                <Button variant="icon" onClick={() => setMobileMenuOpen(false)}>
                    {React.createElement(ICONS.close)}
                </Button>
            </div>
            <nav className="flex flex-col gap-6 text-lg">
                <a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about').scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }} className="hover:text-main">О нас</a>
                <a href="#features" onClick={(e) => { e.preventDefault(); document.getElementById('features').scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }} className="hover:text-main">Возможности</a>
                <a href="#showcase" onClick={(e) => { e.preventDefault(); document.getElementById('showcase').scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }} className="hover:text-main">Витрина</a>
            </nav>
            <div className="mt-8 pt-6 border-t border-grey-2 flex flex-col gap-4">
                <Button variant="big-outline" className="w-full" onClick={() => { onNavigate('app'); setMobileMenuOpen(false); }}>Войти</Button>
                <Button variant="big-classic" className="w-full" onClick={() => { onNavigate('register'); setMobileMenuOpen(false); }}>Регистрация</Button>
            </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" ref={heroRef} className={`text-center py-20 px-6 bg-bg-light ${heroVisible ? 'fade-in-up' : 'section-hidden'}`} style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/backgroundImage.svg)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <h1 className="font-tt-travels text-5xl font-bold mb-4">Создавайте. Тестируйте. Запускайте.</h1>
        <p className="text-xl text-text-grey max-w-6xl mx-auto mb-8">Платформа, где ваши алгоритмы превращаются в живую силу, способную зарабатывать 24/7.
Гибкий инструментарий, автоматизация, мгновенное развертывание — всё, чтобы вы могли сосредоточиться на стратегии, а не на рутине.</p>
        <Button variant="big-with-arrow" iconPosition="left" iconClass="ml-4" onClick={() => onNavigate('register')}>          Присоединиться        </Button>
      </section>
      
      {/* Placeholder Sections */}
      <section id="about" ref={aboutRef} className={`bg-bg-light py-20 px-6 ${aboutVisible ? 'fade-in-up' : 'section-hidden'}`}>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className={`w-full md:w-1/2 text-left md:pl-16 ${aboutVisible ? 'slide-in-left' : 'section-hidden'}`}>
                <h2 className="font-tt-travels text-3xl font-bold mb-4">О проекте</h2>
                <p className="text-lg text-text-grey max-w-5xl">Мы верим, что автоматическая торговля — это не удел избранных и не магия с Уолл-стрит. Это инструмент, который должен быть доступен каждому, у кого есть идея и желание проверить её в деле. Мы создали платформу нового поколения, чтобы вы могли сосредоточиться на главном — на стратегии, логике и принятии решений, а всё остальное доверить инфраструктуре.</p>
            </div>
            <div className={`w-full md:w-1/2 flex justify-center mt-8 md:mt-0 ${aboutVisible ? 'slide-in-right' : 'section-hidden'}`}>
                <img src={`${process.env.PUBLIC_URL}/container.svg`} alt="Container" className="max-w-full h-auto" />
            </div>
        </div>
      </section>

      <section id="section1" ref={section1Ref} className={`bg-white py-20 px-6 ${section1Visible ? 'fade-in-up' : 'section-hidden'}`}>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className={`w-full md:w-1/2 flex justify-center order-2 md:order-1 mt-8 md:mt-0 ${section1Visible ? 'slide-in-left' : 'section-hidden'}`}>
                <img src={`${process.env.PUBLIC_URL}/34укый234ы 1.svg`} alt="Section 1" className="max-w-full h-auto" />
            </div>
            <div className={`w-full md:w-1/2 text-left md:pl-16 order-1 md:order-2 ${section1Visible ? 'slide-in-right' : 'section-hidden'}`}>
                <h2 className="font-tt-travels text-3xl font-bold mb-4">От идеи до результата — за часы, а не недели</h2>
                <p className="text-lg text-text-grey mb-4">Наша платформа избавляет от рутины: никаких серверов, интеграций и технической мороки. Просто заходите, создавайте стратегию — с нуля или на базе готового решения — и запускайте её в работу. Тестирование на истории или в реальном времени, мгновенное развертывание, удобный интерфейс — всё, чтобы вы могли сосредоточиться на главном: логике и эффективности.</p>
            </div>
        </div>
      </section>

      <section id="section2" ref={section2Ref} className={`bg-bg-light py-20 px-6 ${section2Visible ? 'fade-in-up' : 'section-hidden'}`}>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className={`w-full md:w-1/2 text-left md:pl-16 ${section2Visible ? 'slide-in-left' : 'section-hidden'}`}>
                <h2 className="font-tt-travels text-3xl font-bold mb-4">Больше, чем просто боты</h2>
                <p className="text-lg text-text-grey mb-4">Мы не ограничиваемся инструментами. Мы строим экосистему: готовые боты, гибкая кастомизация, автокопирование сделок, сигналы, аналитика и дашборд, где вся активность — под контролем. Это не просто платформа, а место, где идеи превращаются в результат.</p>
            </div>
            <div className={`w-full md:w-1/2 flex justify-center mt-8 md:mt-0 ${section2Visible ? 'slide-in-right' : 'section-hidden'}`}>
                <img src={`${process.env.PUBLIC_URL}/Frame 7460.svg`} alt="Section 2" className="max-w-full h-auto" />
            </div>
        </div>
      </section>

      <section id="section3" ref={section3Ref} className={`bg-white py-20 px-6 ${section3Visible ? 'fade-in-up' : 'section-hidden'}`}>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className={`w-full md:w-1/2 flex justify-center order-2 md:order-1 mt-8 md:mt-0 ${section3Visible ? 'slide-in-left' : 'section-hidden'}`}>
                <img src={`${process.env.PUBLIC_URL}/followers_empty.svg`} alt="Section 3" className="w-[400px] h-[250px]" />
            </div>
            <div className={`w-full md:w-1/2 text-left md:pl-16 order-1 md:order-2 ${section3Visible ? 'slide-in-right' : 'section-hidden'}`}>
                <h2 className="font-tt-travels text-3xl font-bold mb-4">Кто мы</h2>
                <p className="text-lg text-text-grey">Мы — команда, которая знает рынок изнутри. За плечами годы в алгоритмической торговле и управлении фондами с капиталом свыше 100 миллионов долларов. Мы запускали стратегии в реальный бой, переживали просадки, били рекорды и каждый день принимали решения, от которых зависели чужие деньги. Нас объединило разочарование в громоздких и устарелых решениях. Мы создаём платформу не как ещё один инструмент, а как среду для тех, кто ценит скорость, гибкость и контроль. Здесь всё построено вокруг смысла: от первой строки кода до последней кнопки в интерфейсе.</p>
            </div>
        </div>
      </section>

      <section id="section4" ref={section4Ref} className={`bg-bg-light py-20 px-6 ${section4Visible ? 'fade-in-up' : 'section-hidden'}`}>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className={`w-full md:w-1/2 text-left md:pl-16 ${section4Visible ? 'slide-in-left' : 'section-hidden'}`}>
                <h2 className="font-tt-travels text-3xl font-bold mb-4">Наше видение</h2>
                <p className="text-lg text-text-grey mb-4">Мы верим в мир, где алгоритмическая торговля — это инструмент для всех. Где стратегии можно тестировать и запускать за часы, без технических сложностей. Где алгоритмы живут, развиваются и работают на вас.</p>
                <p className="text-lg text-text-grey" style={{ marginTop: '15px' }}>И если вам близко это будущее — добро пожаловать.</p>
            </div>
            <div className={`w-full md:w-1/2 flex justify-center mt-8 md:mt-0 ${section4Visible ? 'slide-in-right' : 'section-hidden'}`}>
                <img src={`${process.env.PUBLIC_URL}/Frame 7461.svg`} alt="Section 4" className="max-w-full h-auto" />
            </div>
        </div>
      </section>

      <section id="features" ref={featuresRef} className={`container mx-auto px-6 py-20 ${featuresVisible ? 'fade-in-up' : 'section-hidden'}`}>
        <h2 className="font-tt-travels text-4xl font-bold text-center mb-12">Что мы предлагаем?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className={`bg-bg-light p-8 rounded-2xl text-center ${featuresVisible ? 'fade-in-up' : 'section-hidden'}`}>
            <img src={`${process.env.PUBLIC_URL}/34653 1.svg`} alt="Feature Icon" className="w-[70px] h-[70px] mx-auto mb-4" />
            <h3 className="font-tt-travels text-2xl font-bold mb-4">Свои боты</h3>
            <p className="text-text-grey">Создавайте торговых ботов за минуты — просто, быстро и без кода. Готовых можно сразу опубликовать на платформе и подключить к партнёрской программе для продвижения.</p>
          </div>
          <div className={`bg-bg-light p-8 rounded-2xl text-center ${featuresVisible ? 'fade-in-up' : 'section-hidden'}`}>
            <img src={`${process.env.PUBLIC_URL}/assets_task_01jye5yc7pe6w9d2y08qzdf1xt_1750675239_img_1 1.svg`} alt="Feature Icon" className="w-[70px] h-[70px] mx-auto mb-4" />
            <h3 className="font-tt-travels text-2xl font-bold mb-4">Копируй и зарабатывай</h3>
            <p className="text-text-grey">Автоматически повторяйте сделки лучших стратегий. Настраивайте риски, следите за результатами в реальном времени, получайте прибыль синхронно с топами.</p>
          </div>
           <div className={`bg-bg-light p-8 rounded-2xl text-center ${featuresVisible ? 'fade-in-up' : 'section-hidden'}`}>
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
                    {React.createElement(ICONS.star, { className: "w-4 h-4 text-yellow-500 mr-1" })}
                    <span className="text-sm font-semibold">{bot.rating}</span>
                  </div>
                  <div className="absolute top-2 left-16 flex items-center bg-white rounded-full px-2 py-1 shadow-md">
                    {React.createElement(ICONS.messages, { className: "w-4 h-4 text-blue-500 mr-1" })}
                    <span className="text-sm font-semibold">{bot.comments}</span>
                  </div>
                </div>
                <h3 className="font-tt-travels text-xl font-bold mb-2">{bot.name}</h3>
                <p className="text-text-grey text-sm mb-4 flex-grow">{bot.description}</p>
                <Button variant="big-classic" className="w-full" onClick={() => onNavigate('register')}>Купить</Button>
              </div>
            ))}
          </div>
          <Button variant="icon" className="absolute top-1/2 left-0 -translate-y-1/2 bg-white/80 backdrop-blur-sm shadow-lg p-4" onClick={handlePrev}>{React.createElement(ICONS.arrowLeft)}</Button>
          <Button variant="icon" className="absolute top-1/2 right-0 -translate-y-1/2 bg-white/80 backdrop-blur-sm shadow-lg p-4" onClick={handleNext}>{React.createElement(ICONS.arrowRight)}</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8 px-6">
        <div className="container mx-auto text-center text-text-grey">
          <p>&copy; {new Date().getFullYear()} TOT Algo. Все права защищены.</p>
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
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
        <Button variant="icon" onClick={handleGoBack} className="bg-grey-2/50 hover:bg-grey-2 active:bg-grey-3">
          {React.createElement(ICONS.arrowLeft)}
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
    <div className="bg-bg-light min-h-screen flex items-center justify-center p-6 relative">
      <div className="absolute top-6 left-6">
        <Button variant="icon" onClick={handleGoBack} className="bg-grey-2/50 hover:bg-grey-2 active:bg-grey-3">
          {React.createElement(ICONS.arrowLeft)}
        </Button>
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full text-center">
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
  const handleItemClick = (page) => {
    onNavigate(page);
    if (isMobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  const sidebarContent = (
    <>
      <div className="p-4">
        <button onClick={() => handleItemClick('Главная')} className="flex items-center gap-4">
          <Logo className="h-10 w-10"/>
          <span className="font-tt-travels text-2xl font-bold text-text-black">TOT Algo</span>
        </button>
      </div>
      <nav className="flex-grow px-4 mt-8 pb-6 overflow-y-auto">
        <div className="space-y-2">
          {['Лента', 'Маркетплейс', 'Персоны'].map((item) => (
            <button key={item} onClick={() => handleItemClick(item)} className={`flex items-center w-full text-left gap-5 px-4 py-3 rounded-lg transition-colors ${activePage === item ? 'bg-main text-white' : 'text-text-grey hover:bg-grey-2/50 hover:text-text-black'}`}>
              {React.createElement(ICONS[{'Лента': 'feed', 'Маркетплейс': 'marketplace', 'Персоны': 'persons'}[item]])}
              <span className="font-open-sans font-semibold">{item}</span>
            </button>
          ))}
        </div>
        <hr className="my-4 border-grey-2" />
        <div className="space-y-2">
          {['Рабочий стол', 'Сообщения', 'Избранное'].map((item) => (
            <button key={item} onClick={() => handleItemClick(item)} className={`flex items-center w-full text-left gap-5 px-4 py-3 rounded-lg transition-colors ${activePage === item ? 'bg-main text-white' : 'text-text-grey hover:bg-grey-2/50 hover:text-text-black'}`}>
              {React.createElement(ICONS[{'Рабочий стол': 'desktop', 'Сообщения': 'messages', 'Избранное': 'bookmark'}[item]])}
              <span className="font-open-sans font-semibold">{item}</span>
            </button>
          ))}
        </div>
        <hr className="my-4 border-grey-2" />
        <div className="space-y-2">
          <button onClick={() => handleItemClick('Помощь')} className={`flex items-center w-full text-left gap-5 px-4 py-3 rounded-lg transition-colors ${activePage === 'Помощь' ? 'bg-main text-white' : 'text-text-grey hover:bg-grey-2/50 hover:text-text-black'}`}>
            {React.createElement(ICONS.help)}
            <span className="font-open-sans font-semibold">Помощь</span>
          </button>
        </div>
      </nav>
    </>
  );

  return (
    <>
      <aside className="hidden lg:flex lg:flex-col w-64 bg-white rounded-2xl m-4 flex-shrink-0 self-start sticky top-4 h-[calc(100vh-2rem)]">{sidebarContent}</aside>
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
        <button className="flex items-center w-full text-left px-4 py-2 text-sm text-text-grey hover:bg-grey-2/50"><img src={UnionIcon} alt="Профиль" className="w-4 h-4 mr-2"/>Профиль</button>
        <button className="flex items-center w-full text-left px-4 py-2 text-sm text-text-grey hover:bg-grey-2/50"><img src={Group12Icon} alt="Настройки аккаунта" className="w-4 h-4 mr-2"/>Настройки аккаунта</button>
        <button className="flex items-center w-full text-left px-4 py-2 text-sm text-text-grey hover:bg-grey-2/50"><PersonsIcon className="w-4 h-4 mr-2"/>Партнерская программа</button>
        <button className="flex items-center w-full text-left px-4 py-2 text-sm text-text-grey hover:bg-grey-2/50"><WalletIcon className="w-4 h-4 mr-2"/>Кошелек</button>
        <div className="border-t border-grey-2 my-1"></div>
        <div className="flex items-center px-4 py-2 text-sm text-text-grey">
          <SiteIcon className="w-4 h-4 mr-2"/>
          <span className="mr-2">Язык:</span>
          <select value={language} onChange={(e) => setLanguage(e.target.value)} className="bg-transparent font-semibold">
            {languages.map(lang => <option key={lang} value={lang}>{lang}</option>)}
          </select>
        </div>
        <div className="border-t border-grey-2 my-1"></div>
        <button onClick={onLogout} className="flex items-center w-full text-left px-4 py-2 text-sm text-main hover:bg-grey-2/50"><ExitIcon className="w-4 h-4 mr-2"/>Выйти из аккаунта</button>
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
        <div className="lg:hidden"><Button variant="icon" onClick={() => setMobileMenuOpen(true)}>{React.createElement(ICONS.burger)}</Button></div>
        <div className="relative flex items-center flex-grow md:flex-grow-0">
          {React.createElement(ICONS.search, { className: "absolute left-3 text-text-grey w-5 h-5" })}
          <input
            type="text"
            placeholder="Поиск"
            className="pl-10 pr-4 py-2 rounded-full bg-grey-1 border border-grey-2 focus:outline-none focus:border-main w-full md:w-[700px] transition-all duration-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 md:gap-4 ml-auto">
          <Button variant="big-classic" onClick={onOpenModal} className="hidden md:inline-flex">{React.createElement(ICONS.plus, { className: "mr-2" })} Создать</Button>
          <Button variant="icon" onClick={onOpenModal} className="md:hidden">{React.createElement(ICONS.plus)}</Button>
          <div className="relative" ref={notificationsRef}><Button variant="icon" onClick={() => setNotificationsOpen(o => !o)}>{React.createElement(ICONS.bell)}</Button>{notificationsOpen && <NotificationDropdown />}</div>
          <div className="relative" ref={profileRef}><Button variant="icon" onClick={() => setProfileOpen(o => !o)}>{React.createElement(ICONS.user)}</Button>{profileOpen && <ProfileDropdown />}</div>
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
        if (step === 3) { 
            onVerificationComplete(); 
            setStep(4); 
        } else {
            setStep(s => s + 1);
        }
    };
    const handleBackStep = () => setStep(s => s - 1);
    const handleProductSelect = (product) => {
        if (product === 'Алго бот') {
            setStep(5); // Move to the creation form
        }
        // Other products are disabled for now
    };

    const renderStep = () => {
        switch (step) {
            case 1: return (<><h2 className="text-2xl font-bold text-center mb-2 font-tt-travels">ПОДТВЕРЖДЕНИЕ ЛИЧНОСТИ</h2><p className="text-center text-text-grey mb-6">Выберите страну и тип документа</p><div className="mb-4"><label className="font-semibold mb-2 block">Выберите страну выдачи документа</label><select className="w-full p-3 border border-grey-2 rounded-lg"><option>Россия</option><option>Казахстан</option></select></div><div className="mb-6"><label className="font-semibold mb-2 block">Выберите тип документа</label><div className="grid grid-cols-2 gap-4">{['Паспорт', 'Водительское удостоверение', 'ID карта', 'Вид на жительство'].map(type => (<label key={type} className={`flex items-center p-3 border rounded-lg cursor-pointer ${docType === type ? 'border-main bg-main/10' : 'border-grey-2'}`}><input type="radio" name="docType" value={type} checked={docType === type} onChange={() => setDocType(type)} className="form-radio text-main focus:ring-main" /><span className="ml-3 text-sm">{type}</span></label>))}</div></div><div className="bg-grey-2/30 p-4 rounded-lg text-center mb-6">{React.createElement(ICONS.upload, { className: "mx-auto text-grey mb-2" })}<Button variant="text">Загрузить документ</Button></div><Button variant="big-with-arrow" icon={ICONS.arrowRight} iconPosition="right" className="w-full" onClick={handleNextStep}>Следующий шаг</Button></>);
            case 2: return (<><h2 className="text-2xl font-bold text-center mb-2 font-tt-travels">3D СКАНИРОВАНИЕ ЛИЦА</h2><p className="text-center text-text-grey mb-8 max-w-sm mx-auto">Сначала посмотрите в камеру. Убедитесь, что ваше лицо полностью находится в кадре. Медленно поверните голову по кругу, чтобы завершить 3D-сканирование.</p><div className="relative w-48 h-48 mx-auto mb-8 flex items-center justify-center"><div className="absolute inset-0 border-8 border-grey-2 rounded-full"></div><div className="absolute inset-0 border-8 border-main rounded-full animate-spin" style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }}></div><img src="https://placehold.co/150x150/E2BAA4/000000?text=User" alt="User face" className="rounded-full w-40 h-40 object-cover"/></div><div className="flex gap-4"><Button variant="big-outline" className="w-full" onClick={handleBackStep}>Назад</Button><Button variant="big-classic" className="w-full" onClick={handleNextStep}>Начать</Button></div></>);
            case 3: return (<><div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center bg-light-blue/20 rounded-full"><svg className="w-12 h-12 text-light-blue animate-spin" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 18V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M4.93 4.93L7.76 7.76" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M16.24 16.24L19.07 19.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 12H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M18 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M4.93 19.07L7.76 16.24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M16.24 7.76L19.07 4.93" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div><h2 className="text-2xl font-bold text-center mb-2 font-tt-travels">Система уже проверяет ваши данные.</h2><p className="text-center text-text-grey mb-8 max-w-md mx-auto">Обычно это занимает одну-три минуты. Статус учетной записи будет автоматически изменяться после завершения проверки.</p><Button variant="big-classic" className="w-full" onClick={handleNextStep}>(Имитация) Завершить проверку</Button></>);
            case 4: return <ProductSelectionStep onSelectProduct={handleProductSelect} />;
            case 5: return <AlgoBotCreationForm onBack={() => setStep(4)} onSave={onProductCreated} />;
            default: return null;
        }
    };

    return (<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"><div className="bg-white rounded-2xl p-8 w-full max-w-3xl max-h-[90vh] overflow-y-auto relative"><Button variant="icon" className="absolute top-4 right-4" onClick={onClose}>{React.createElement(ICONS.close)}</Button>{renderStep()}</div></div>);
};

// eslint-disable-next-line no-template-curly-in-string
const ProductCreationForm = ({ onBack, onSave }) => { return (<><h2 className="text-2xl font-bold mb-6 font-tt-travels">Создание нового продукта</h2><div className="space-y-4"><div><label className="font-semibold mb-1 block">Название</label><input type="text" placeholder="Название продукта..." className="w-full p-3 border border-grey-2 rounded-lg" /></div><div><label className="font-semibold mb-1 block">Продукт</label><select className="w-full p-3 border border-grey-2 rounded-lg"><option>Эксперты</option><option>Индикаторы</option></select></div><div className="grid grid-cols-2 gap-4"><div><label className="font-semibold mb-1 block">Тип счета</label><select className="w-full p-3 border border-grey-2 rounded-lg"><option>Любой</option></select></div><div><label className="font-semibold mb-1 block">Тип эксперта</label><div className="p-3 border border-grey-2 rounded-lg space-y-2"><label className="flex items-center"><input type="checkbox" className="form-checkbox mr-2"/>Арбитражный</label><label className="flex items-center"><input type="checkbox" className="form-checkbox mr-2"/>Скальпирующий</label></div></div></div><div><label className="font-semibold mb-1 block">Цена</label><div className="space-y-2"><div className="flex items-center gap-2"><input type="checkbox" className="form-checkbox"/><input type="number" placeholder="0.00" className="w-24 p-2 border rounded-lg"/><span>USD</span><span>аренда на 1 месяц</span></div><div className="flex items-center gap-2"><input type="checkbox" className="form-checkbox"/><input type="number" placeholder="0.00" className="w-24 p-2 border rounded-lg"/><span>USD</span><span>аренда на 1 год</span></div></div></div></div><div className="flex gap-4 mt-8">{onBack && <Button variant="big-outline" onClick={onBack}>Назад</Button>}<Button variant="big-classic" className="w-full" onClick={onSave}>Сохранить черновик</Button></div></>);};

const BotDetailsPage = ({ bot, onBack, isPurchased }) => {
  const [activeTab, setActiveTab] = useState('Описание');
  const tabs = ['Описание', 'Инструкция', 'Отзывы', 'Обновление'];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Описание':
        return (
          <div className="py-6">
            <div className="max-w-2xl">
              <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                      <span className="text-text-grey">Доходность за год</span>
                      <div className="flex-grow border-b border-dashed border-grey-2 mx-4"></div>
                      <span className="font-semibold">{Math.floor(Math.random() * 200 + 50)}%</span>
                  </div>
                  <div className="flex justify-between items-center">
                      <span className="text-text-grey">Уровень риска</span>
                      <div className="flex-grow border-b border-dashed border-grey-2 mx-4"></div>
                      <span className="font-semibold">{['Низкий', 'Средний', 'Высокий'][Math.floor(Math.random() * 3)]}</span>
                  </div>
                  <div className="flex justify-between items-center">
                      <span className="text-text-grey">Допустимая просадка</span>
                      <div className="flex-grow border-b border-dashed border-grey-2 mx-4"></div>
                      <span className="font-semibold">{Math.floor(Math.random() * 20 + 5)}%</span>
                  </div>
                  <div className="flex justify-between items-center">
                      <span className="text-text-grey">Сейчас активно</span>
                      <div className="flex-grow border-b border-dashed border-grey-2 mx-4"></div>
                      <span className="font-semibold">{Math.floor(Math.random() * 100 + 10)}</span>
                  </div>
              </div>
              <h4 className="font-bold text-xl mb-4">Полное описание</h4>
              <p className="text-text-grey">{bot.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl.</p>
              
              <h4 className="font-bold text-xl my-4">Скриншоты</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <img src={bot.image} alt="Screenshot 1" className="rounded-lg w-full h-auto" />
                <img src={bot.image} alt="Screenshot 2" className="rounded-lg w-full h-auto" />
              </div>
            </div>
          </div>
        );
      case 'Инструкция':
        return (
          <div className="p-6">
            <h4 className="font-bold text-xl mb-4">Схема подключения</h4>
            <div className="flex items-center justify-center p-4 border border-dashed border-grey-2 rounded-lg">
              <p className="text-text-grey">Здесь будет диаграмма или пошаговая инструкция по подключению.</p>
            </div>
          </div>
        );
      case 'Отзывы':
        return (
          <div className="p-6">
            <h4 className="font-bold text-xl mb-4">Отзывы покупателей</h4>
            <p className="text-text-grey mb-4">Оставить отзыв могут только пользователи, купившие продукт.</p>
            <div className="space-y-4">
              <textarea placeholder="Ваш комментарий..." className="w-full p-3 border border-grey-2 rounded-lg"></textarea>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => React.createElement(ICONS.star, { key: i, className: "w-6 h-6 text-grey-2 cursor-pointer hover:text-yellow-400" }))}
                </div>
                <Button variant="small-classic">Отправить</Button>
              </div>
            </div>
          </div>
        );
      case 'Обновление':
        return (
          <div className="p-6">
            <div className="space-y-6">
              <div className="border-b border-grey-2 pb-4">
                <p className="font-semibold">Версия 1.3 - <span className="text-text-grey">01.08.2025</span></p>
                <p className="text-text-grey mt-2">- Добавлена поддержка новой криптовалютной пары.
- Улучшена стабильность работы при высокой волатильности.</p>
              </div>
              <div className="border-b border-grey-2 pb-4">
                <p className="font-semibold">Версия 1.2 - <span className="text-text-grey">15.07.2025</span></p>
                <p className="text-text-grey mt-2">- Исправлена ошибка с расчетом стоп-лосса.</p>
              </div>
              <div className="pb-4">
                <p className="font-semibold">Версия 1.0 - <span className="text-text-grey">01.07.2025</span></p>
                <p className="text-text-grey mt-2">- Первый релиз.</p>
              </div>
            </div>
          </div>
        );
      default: return null;
    }
  };

  return (
    <div>
      <div className="flex items-center mb-6">
        <Button variant="icon" onClick={onBack} className="mr-4">
          {React.createElement(ICONS.arrowLeft)}
        </Button>
        <h2 className="font-bold text-2xl">Подробная информация</h2>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col lg:flex-row items-start" style={{ gap: '50px' }}>
          {/* Left Card Container */}
          <div className="w-full lg:w-2/3 bg-white p-8" style={{ borderRadius: '65px' }}>
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-green-service/20 text-green-service font-semibold px-4 py-1 rounded-full text-sm">Алго-боты</span>
            </div>
            <h3 className="font-bold text-4xl mb-6">{bot.name}</h3>
            <img src={bot.image} alt={bot.name} className="w-full h-auto max-h-[300px] object-cover rounded-2xl mb-6" />
            
            <div className="border-b border-grey-2 flex">
              {tabs.map(tab => (
                <button key={tab} onClick={() => setActiveTab(tab)} className={`px-6 py-3 font-semibold transition-colors ${activeTab === tab ? 'text-main border-b-2 border-main' : 'text-text-grey hover:bg-grey-2/30'}`}>
                  {tab}
                </button>
              ))}
            </div>
            <div>{renderTabContent()}</div>
          </div>

          {/* Right Purchase Container */}
          <aside className="w-full lg:w-1/3 flex-shrink-0">
          <div className="bg-white shadow-lg p-6 w-full lg:w-full h-auto flex flex-col border border-grey-2" style={{ borderRadius: '65px' }}>
              <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center bg-white rounded-full px-2 py-1 shadow-md">
                      {React.createElement(ICONS.star, { className: "w-4 h-4 text-yellow-500 mr-1" })}
                      <span className="text-sm font-semibold">{bot.rating}</span>
                  </div>
                  <div className="flex items-center bg-white rounded-full px-2 py-1 shadow-md">
                      {React.createElement(ICONS.messages, { className: "w-4 h-4 text-blue-500 mr-1" })}
                      <span className="text-sm font-semibold">{bot.comments} отзывов</span>
                  </div>
              </div>
              <p className="font-bold text-4xl my-2">$199</p>
              <div className="flex items-baseline mb-4">
                  <p className="font-semibold text-lg">Прогноз:</p>
                  <p className="text-orange text-lg font-bold ml-2">+170%</p>
                  <p className="text-text-grey ml-1">в год</p>
              </div>
              <div className="flex-grow"></div>
              {isPurchased ? (
                <Button variant="small-classic" className="w-full">Скачать</Button>
              ) : (
                <div className="flex items-center gap-4 mt-4">
                    <Button variant="small-outline" className="w-1/2 !border-main !text-main hover:!bg-main hover:!text-white">Демо</Button>
                    <Button variant="small-classic" className="w-1/2">Купить</Button>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

const personasData = [
  { id: 1, name: 'Александр Волков', specialization: 'Алго-боты, Сигналы', rating: 4.9, reviews: 124, avatar: 'https://placehold.co/96x96/E2BAA4/000000?text=АВ' },
  { id: 2, name: 'Елена Петрова', specialization: 'Услуги, Софт', rating: 4.8, reviews: 98, avatar: 'https://placehold.co/96x96/A4E2B9/000000?text=ЕП' },
  { id: 3, name: 'Дмитрий Сидоров', specialization: 'Алго-боты', rating: 4.7, reviews: 75, avatar: 'https://placehold.co/96x96/A4A4E2/000000?text=ДС' },
  { id: 4, name: 'Анна Кузнецова', specialization: 'Сигналы', rating: 4.6, reviews: 62, avatar: 'https://placehold.co/96x96/E2A4A4/000000?text=АК' },
  { id: 5, name: 'Сергей Иванов', specialization: 'Алго-боты, Услуги', rating: 4.5, reviews: 51, avatar: 'https://placehold.co/96x96/E2E2A4/000000?text=СИ' },
  { id: 6, name: 'Мария Васильева', specialization: 'Софт', rating: 4.4, reviews: 43, avatar: 'https://placehold.co/96x96/A4E2E2/000000?text=МВ' },
  { id: 7, name: 'Николай Смирнов', specialization: 'Алго-боты', rating: 4.3, reviews: 38, avatar: 'https://placehold.co/96x96/E2A4E2/000000?text=НС' },
  { id: 8, name: 'Ольга Попова', specialization: 'Сигналы, Услуги', rating: 4.2, reviews: 31, avatar: 'https://placehold.co/96x96/B9E2A4/000000?text=ОП' },
  { id: 9, name: 'Павел Козлов', specialization: 'Алго-боты', rating: 4.1, reviews: 25, avatar: 'https://placehold.co/96x96/A4B9E2/000000?text=ПК' },
  { id: 10, name: 'Виктория Лебедева', specialization: 'Услуги', rating: 4.0, reviews: 20, avatar: 'https://placehold.co/96x96/E2B9A4/000000?text=ВЛ' },
  { id: 11, name: 'Иван Морозов', specialization: 'Алго-боты, Софт', rating: 3.9, reviews: 18, avatar: 'https://placehold.co/96x96/A4E2B9/000000?text=ИМ' },
  { id: 12, name: 'Дарья Новикова', specialization: 'Сигналы', rating: 3.8, reviews: 15, avatar: 'https://placehold.co/96x96/A4A4E2/000000?text=ДН' },
  { id: 13, name: 'Андрей Захаров', specialization: 'Алго-боты', rating: 3.7, reviews: 12, avatar: 'https://placehold.co/96x96/E2A4A4/000000?text=АЗ' },
  { id: 14, name: 'Екатерина Соловьева', specialization: 'Услуги', rating: 3.6, reviews: 9, avatar: 'https://placehold.co/96x96/E2E2A4/000000?text=ЕС' },
  { id: 15, name: 'Максим Борисов', specialization: 'Алго-боты, Сигналы', rating: 3.5, reviews: 7, avatar: 'https://placehold.co/96x96/A4E2E2/000000?text=МБ' },
];

const ProfileCard = ({ profile, isFavorited }) => (
  <div className="bg-white p-4 rounded-2xl text-center transform hover:-translate-y-1 transition-all duration-300 relative">
    <Button variant="icon" className={`absolute top-2 right-2 ${isFavorited ? 'text-orange' : 'text-text-grey'} hover:text-orange`}>
        {React.createElement(ICONS.bookmark, { className: "w-5 h-5" })}
    </Button>
    <img src={profile.avatar} alt={profile.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
    <h4 className="font-bold text-lg">{profile.name}</h4>
    <p className="text-sm text-text-grey mb-2">{profile.specialization}</p>
    <div className="flex justify-center items-center gap-2 text-sm mb-4">
      {React.createElement(ICONS.star, { className: "w-4 h-4 text-yellow-500" })}
      <span>{profile.rating}</span>
      <span className="text-text-grey">({profile.reviews} отзывов)</span>
    </div>
    <Button variant="small-classic" className="w-full">Подписаться</Button>
  </div>
);
// Моковые данные для чата (support, promo, seller-1 и т.д.)
const chatMockData = {
  support: {
    name: 'Поддержка',
    avatar: 'https://placehold.co/40x40/4682B4/fff?text=S',
    messages: [
      { id: 1, text: 'Добрый день! У меня возникла проблема с подключением API ключей от биржи. Можете помочь?', sender: 'user', time: '11:00', status: 'read' },
      { id: 2, text: 'Здравствуйте! Конечно. Уточните, пожалуйста, какую ошибку вы получаете?', sender: 'contact', time: '11:01', status: 'read' },
      { id: 3, text: 'Пишет "Invalid API Key". Хотя я уверен, что все ввел правильно.', sender: 'user', time: '11:03', status: 'read' },
      { id: 4, text: 'Понял вас. Чаще всего такая ошибка возникает, если при создании ключа не были выставлены правильные разрешения. Убедитесь, что у ключа есть права на чтение информации и на совершение сделок. Права на вывод средств не нужны.', sender: 'contact', time: '11:05', status: 'read' },
      { id: 5, text: 'А, точно! Забыл про права на сделки. Сейчас попробую пересоздать ключ.', sender: 'user', time: '11:07', status: 'read' },
      { id: 6, text: 'Отлично, получилось! Большое спасибо за помощь!', sender: 'user', time: '11:15', status: 'sent' },
      { id: 7, text: 'Рады были помочь! Если возникнут еще вопросы - обращайтесь.', sender: 'contact', time: '11:16', status: 'delivered' },
    ],
  },
  promo: {
    name: 'Акции и предложения',
    avatar: 'https://placehold.co/40x40/FF69B4/fff?text=P',
    messages: [
      { id: 1, text: '🔥 Черная пятница на TOT Algo! 🔥 Скидки до -70% на лучших торговых ботов и подписки на сигналы. Не упустите свой шанс автоматизировать прибыль!', sender: 'contact', time: 'Вчера', status: 'read' },
      { id: 2, text: 'Только до конца недели, пополните свой счет на сумму от $500 и получите бонус +10% на баланс. Начните торговать с большим депозитом!', sender: 'contact', time: '15:12', status: 'delivered' },
    ],
  },
  'seller-1': {
    name: 'Продавец "CryptoWhale"',
    avatar: 'https://placehold.co/40x40/E2BAA4/000000?text=CW',
    messages: [
      { id: 1, text: 'Здравствуйте! Увидел, что вы приобрели моего бота "Эксперт на криптовалюту BTC".', sender: 'contact', time: '10:30', status: 'read' },
      { id: 2, text: 'Спасибо за покупку! В качестве бонуса, хочу предложить вам скидку 20% на мой новый торговый сигнал по ETH/USD.', sender: 'contact', time: '10:31', status: 'read' },
      { id: 3, text: 'О, спасибо, интересно! А какая у него статистика?', sender: 'user', time: '10:35', status: 'read' },
      { id: 4, text: 'За последний месяц доходность составила +35%. Сигнал основан на анализе объемов и настроений в социальных сетях.', sender: 'contact', time: '10:38', status: 'sent' },
    ],
  },
  'seller-2': {
    name: 'Продавец "Algo-tradingbot Gold"',
    avatar: 'https://placehold.co/40x40/DAA520/fff?text=AG',
    messages: [
      { id: 1, text: 'Обновление для вашего бота "Algo-tradingbot Gold" доступно! Версия 1.5 включает улучшенный алгоритм управления рисками.', sender: 'contact', time: '09:15', status: 'delivered' },
    ],
  },
  'seller-3': {
    name: 'Продавец "Форекс Мастер Pro"',
    avatar: 'https://placehold.co/40x40/4682B4/fff?text=FM',
    messages: [
      { id: 1, text: 'Привет! Я автор бота "Форекс Мастер Pro". Если у вас есть вопросы по настройке, обращайтесь!', sender: 'contact', time: 'Вчера', status: 'read' },
    ],
  },
  'seller-4': {
    name: 'Продавец "Индексный Скальпер"',
    avatar: 'https://placehold.co/40x40/2E8B57/fff?text=ИС',
    messages: [
      { id: 1, text: 'Вижу, вы добавили "Индексный Скальпер" в избранное. Готовы начать зарабатывать на индексах?', sender: 'contact', time: 'Позавчера', status: 'read' },
    ],
  },
};

const articlesData = [
  {
    id: 1,
    title: "Как начать торговать на TOT Algo",
    description: "Пошаговое руководство для новичков: от регистрации до первой сделки.",
    image: botImages[0],
    content: "Полное содержание статьи 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 2,
    title: "Основы алгоритмической торговли",
    description: "Погружение в мир автоматизированных стратегий: термины, принципы, преимущества.",
    image: botImages[1],
    content: "Полное содержание статьи 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 3,
    title: "Выбор первого алго-бота: на что обратить внимание",
    description: "Советы по выбору подходящего торгового робота для ваших целей и уровня риска.",
    image: botImages[2],
    content: "Полное содержание статьи 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 4,
    title: "Управление рисками в автоматической торговле",
    description: "Как минимизировать потенциальные убытки и защитить свой капитал.",
    image: botImages[3],
    content: "Полное содержание статьи 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 5,
    title: "Психология трейдинга: как сохранить спокойствие",
    description: "Важность эмоционального контроля и дисциплины в торговле.",
    image: botImages[4],
    content: "Полное содержание статьи 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 6,
    title: "Настройка торгового терминала для TOT Algo",
    description: "Подробная инструкция по подключению и настройке вашего терминала.",
    image: botImages[5],
    content: "Полное содержание статьи 6. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 7,
    title: "Использование индикаторов для анализа рынка",
    description: "Обзор популярных индикаторов и их применение в торговых стратегиях.",
    image: botImages[6],
    content: "Полное содержание статьи 7. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 8,
    title: "Бэктестинг и оптимизация алго-ботов",
    description: "Как тестировать и улучшать производительность ваших торговых роботов.",
    image: botImages[7],
    content: "Полное содержание статьи 8. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 9,
    title: "Торговля на новостях с помощью алго-ботов",
    description: "Стратегии автоматической торговли во время важных экономических событий.",
    image: botImages[8],
    content: "Полное содержание статьи 9. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 10,
    title: "Распространенные ошибки новичков в алго-трейдинге",
    description: "Чего следует избегать, чтобы не потерять капитал.",
    image: botImages[9],
    content: "Полное содержание статьи 10. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
];

const videosData = [
  {
    id: 1,
    title: "Видеоурок: Создание своего первого алго-бота",
    description: "Подробный видеоурок по созданию и настройке вашего первого торгового робота на платформе TOT Algo.",
    image: botImages[10],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder YouTube video
    content: "Полное содержание видео 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 2,
    title: "Обзор интерфейса TOT Algo",
    description: "Знакомство с основными разделами платформы и их функционалом.",
    image: botImages[11],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    content: "Полное описание видео 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 3,
    title: "Как подключить API ключи от биржи",
    description: "Пошаговая видеоинструкция по безопасной интеграции ваших API ключей.",
    image: botImages[12],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    content: "Полное описание видео 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 4,
    title: "Стратегии скальпинга для начинающих",
    description: "Практический видеоурок по основам скальпинга с использованием алго-ботов.",
    image: botImages[13],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    content: "Полное описание видео 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 5,
    title: "Обзор новых функций TOT Algo",
    description: "Видеопрезентация последних обновлений и добавленных возможностей платформы.",
    image: botImages[14],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    content: "Полное описание видео 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 6,
    title: "Как анализировать отчеты по торговле",
    description: "Видеоурок по интерпретации данных и улучшению торговых результатов.",
    image: botImages[0],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    content: "Полное описание видео 6. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 7,
    title: "Создание собственного индикатора",
    description: "Продвинутый видеоурок для разработчиков: как создать свой технический индикатор.",
    image: botImages[1],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    content: "Полное описание видео 7. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 8,
    title: "Оптимизация алго-ботов: практические советы",
    description: "Видео с советами по повышению эффективности ваших торговых роботов.",
    image: botImages[2],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    content: "Полное описание видео 8. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 9,
    title: "Торговля на Форекс с TOT Algo",
    description: "Видеоурок по особенностям торговли на валютном рынке с использованием платформы.",
    image: botImages[3],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    content: "Полное описание видео 9. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 10,
    title: "Как использовать сигналы для торговли",
    description: "Видеоинструкция по подписке и использованию торговых сигналов.",
    image: botImages[4],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    content: "Полное описание видео 10. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
];

const newsUpdatesData = [
  {
    id: 1,
    title: "Обновление платформы: Новые индикаторы и инструменты",
    description: "Мы выпустили крупное обновление, добавляющее новые технические индикаторы и расширенные инструменты анализа для ваших торговых стратегий.",
    image: botImages[5],
    date: "10.08.2025",
    content: "Полное содержание новости 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 2,
    title: "TOT Algo запускает партнерскую программу",
    description: "Приглашаем всех желающих присоединиться к нашей партнерской программе и зарабатывать на привлечении новых пользователей.",
    image: botImages[6],
    date: "05.08.2025",
    content: "Полное содержание новости 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 3,
    title: "Новые возможности для создателей алго-ботов",
    description: "Расширенные инструменты для разработки и монетизации ваших торговых роботов.",
    image: botImages[7],
    date: "01.08.2025",
    content: "Полное содержание новости 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 4,
    title: "Вебинар: Эффективные стратегии алго-трейдинга",
    description: "Приглашаем на бесплатный вебинар с ведущими экспертами TOT Algo.",
    image: botImages[8],
    date: "25.07.2025",
    content: "Полное содержание новости 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 5,
    title: "Интеграция с новыми биржами",
    description: "Теперь TOT Algo поддерживает торговлю на еще большем количестве популярных криптовалютных и фондовых бирж.",
    image: botImages[9],
    date: "20.07.2025",
    content: "Полное содержание новости 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 6,
    title: "Улучшение аналитических отчетов",
    description: "Мы обновили систему аналитики, предоставив еще более подробные и наглядные отчеты по вашей торговой активности.",
    image: botImages[10],
    date: "15.07.2025",
    content: "Полное содержание новости 6. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 7,
    title: "Новый дизайн личного кабинета",
    description: "Представляем обновленный, более интуитивно понятный и функциональный дизайн вашего личного кабинета.",
    image: botImages[11],
    date: "10.07.2025",
    content: "Полное содержание новости 7. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 8,
    title: "Расширение библиотеки алго-ботов",
    description: "В нашу библиотеку добавлены новые высокодоходные алго-боты для различных рынков.",
    image: botImages[12],
    date: "05.07.2025",
    content: "Полное содержание новости 8. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 9,
    title: "Улучшение скорости исполнения ордеров",
    description: "Мы оптимизировали инфраструктуру для обеспечения еще более быстрого и надежного исполнения ваших торговых ордеров.",
    image: botImages[13],
    date: "01.07.2025",
    content: "Полное содержание новости 9. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 10,
    title: "Новые обучающие материалы для трейдеров",
    description: "Мы добавили серию новых обучающих видео и статей, чтобы помочь вам освоить алго-трейдинг.",
    image: botImages[14],
    date: "28.06.2025",
    content: "Полное содержание новости 10. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
];

const FavoritesPage = () => {
  const [activeTab, setActiveTab] = useState('Персоны');
  const tabs = ['Персоны', 'Алго-боты', 'Сигналы', 'Услуги', 'Софт', 'Дополнительно'];

  const favoritedPersonas = personasData.slice(0, 5);
  const favoritedBots = botData.slice(0, 6);

  const renderContent = () => {
    switch (activeTab) {
      case 'Персоны':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {favoritedPersonas.map((profile) => (
              <ProfileCard key={profile.id} profile={profile} isFavorited={true} />
            ))}
          </div>
        );
      case 'Алго-боты':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {favoritedBots.map((bot, index) => (
              <BotCard key={index} bot={bot} isFavorited={true} />
            ))}
          </div>
        );
      default:
        return (
          <div className="text-center py-16">
            <p className="text-text-grey text-lg">{`Здесь будут ваши избранные ${activeTab.toLowerCase()}.`}</p>
          </div>
        );
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-sm p-4">
        <div className="border-b border-grey-2 flex items-center justify-between flex-wrap">
          <nav className="flex">
            {tabs.map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 md:px-6 py-3 font-semibold transition-colors text-sm md:text-base ${activeTab === tab ? 'text-main border-b-2 border-main' : 'text-text-grey hover:bg-grey-2/30'}`}>
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </div>
      <div>{renderContent()}</div>
    </div>
  );
};

const MessagesPage = () => {
  const [activeChatId, setActiveChatId] = useState('support');
  const [message, setMessage] = useState('');
  const [showEmojis, setShowEmojis] = useState(false);
  const emojis = ['😀', '😂', '😍', '🤔', '👍', '🙏', '🚀', '🔥', '💰', '📈', '📉', '🎉'];
  const activeChat = chatMockData[activeChatId];

  const MessageStatus = ({ status }) => {
    if (status === 'read') return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M22 4L12 14.01l-3-3" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
    if (status === 'delivered') return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
    if (status === 'sent') return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a10 10 0 100 20 10 10 0 000-20z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="1 4"/></svg>;
    return null;
  };

  return (
    <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-sm h-full max-h-[calc(100vh-12rem)]">
      <div className="w-full md:w-1/3 lg:w-1/4 border-r border-grey-2 flex flex-col">
        <div className="p-4 border-b border-grey-2">
          <h2 className="font-bold text-xl">Сообщения</h2>
        </div>
        <div className="flex-grow overflow-y-auto">
          {Object.keys(chatMockData).map(chatId => (
            <div key={chatId} onClick={() => setActiveChatId(chatId)} className={`flex items-center p-4 cursor-pointer ${activeChatId === chatId ? 'bg-main/10' : 'hover:bg-grey-1/50'}`}>
              <img src={chatMockData[chatId].avatar} alt={chatMockData[chatId].name} className="w-12 h-12 rounded-full mr-4" />
              <div className="flex-grow overflow-hidden">
                <h3 className="font-semibold">{chatMockData[chatId].name}</h3>
                <p className="text-sm text-text-grey truncate">{chatMockData[chatId].messages.slice(-1)[0].text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full md:w-2/3 lg:w-3/4 flex flex-col">
        <div className="p-4 border-b border-grey-2 flex items-center">
          <img src={activeChat.avatar} alt={activeChat.name} className="w-10 h-10 rounded-full mr-4" />
          <h2 className="font-bold text-xl">{activeChat.name}</h2>
        </div>
        <div className="flex-grow p-6 overflow-y-auto space-y-4">
          {activeChat.messages.map(msg => (
            <div key={msg.id} className={`flex items-end gap-2 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
              {msg.sender === 'contact' && <img src={activeChat.avatar} alt={activeChat.name} className="w-8 h-8 rounded-full" />}
              <div className={`px-4 py-2 rounded-2xl max-w-md ${msg.sender === 'user' ? 'bg-main text-white rounded-br-none' : 'bg-grey-1 text-text-black rounded-bl-none'}`}>
                <p>{msg.text}</p>
                <div className={`flex items-center gap-1 mt-1 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <span className="text-xs opacity-70">{msg.time}</span>
                  {msg.sender === 'user' && <MessageStatus status={msg.status} />}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-grey-2">
          <div className="flex items-center bg-grey-1 rounded-full px-2">
            <div className="relative">
              <Button variant="icon" onClick={() => setShowEmojis(s => !s)}>{React.createElement(ICONS.smiley)}</Button>
              {showEmojis && (
                <div className="absolute bottom-full left-0 mb-2 bg-white shadow-lg rounded-lg p-2 grid grid-cols-6 gap-1 w-48">
                  {emojis.map(emoji => <button key={emoji} onClick={() => setMessage(m => m + emoji)} className="p-2 rounded-lg hover:bg-grey-1">{emoji}</button>)}
                </div>
              )}
            </div>
            <input type="text" placeholder="Напишите сообщение..." className="flex-grow bg-transparent p-3 focus:outline-none" value={message} onChange={(e) => setMessage(e.target.value)} />
            <Button variant="icon" className="text-main">{React.createElement(ICONS.send)}</Button>
          </div>
        </div>
      </div>
    </div>
  );
};


export const BotCard = ({ bot, onDetailsClick, onBuyClick, isFavorited, isPurchased }) => (
    <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col transform hover:-translate-y-1 transition-all duration-300 h-full">
        <div className="relative mb-4">
            <img src={bot.image} alt={bot.name} className="w-full h-48 object-cover rounded-lg"/>
            <div className="absolute top-2 left-2 flex items-center gap-2">
                <div className="flex items-center bg-white rounded-full px-2 py-1 shadow-md">
                    {React.createElement(ICONS.star, { className: "w-4 h-4 text-yellow-500 mr-1" })}
                    <span className="text-sm font-semibold">{bot.rating}</span>
                </div>
                <div className="flex items-center bg-white rounded-full px-2 py-1 shadow-md">
                    {React.createElement(ICONS.messages, { className: "w-4 h-4 text-blue-500 mr-1" })}
                    <span className="text-sm font-semibold">{bot.comments}</span>
                </div>
            </div>
            <Button variant="icon" className={`absolute top-2 right-2 ${isFavorited ? 'text-orange' : 'text-white'} bg-black/20 hover:bg-black/40`}>
                {React.createElement(ICONS.bookmark, { className: "w-5 h-5" })}
            </Button>
        </div>
        <h3 className="font-tt-travels text-xl font-bold mb-2">{bot.name}</h3>
        <p className="text-text-grey text-sm mb-4 flex-grow">{bot.description}</p>
        <div className="flex items-center gap-2 mt-4">
            {isPurchased ? (
                <Button variant="small-outline" icon={ICONS.arrowRight} iconPosition="right" onClick={onDetailsClick} className="w-full !border-orange !text-orange hover:!bg-orange hover:!text-white">
                    Подробнее
                </Button>
            ) : (
                <>
                    <Button variant="small-classic" className="w-1/2" onClick={onBuyClick}>Купить</Button>
                    <Button variant="small-outline" icon={ICONS.arrowRight} iconPosition="right" onClick={onDetailsClick} className="w-1/2 !border-orange !text-orange hover:!bg-orange hover:!text-white">
                        Подробнее
                    </Button>
                </>
            )}
        </div>
    </div>
);

export const BrokerAdCard = ({ image, title }) => (
  <a href="#!" className="block bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden aspect-square">
    <div className="relative w-full h-full">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/30 flex items-end justify-start p-2">
        <h4 className="text-white font-bold text-sm">{title}</h4>
      </div>
    </div>
  </a>
);

const Marketplace = ({ onNavigate, botData, onBotDetailsClick, onSignalDetailsClick }) => {
  const [activeTab, setActiveTab] = useState('Алго-боты');
  const [isFilterOpen, setFilterOpen] = useState(false);
  const tabs = ['Алго-боты', 'Сигналы', 'Услуги', 'Софт', 'Дополнительно'];
  const [showFilter, setShowFilter] = useState(true);
  const lastScrollY = useRef(0);

  const recommendedBots = botData.filter(b => b.rating >= 4.8).slice(0, 3).map(b => ({...b, rating: 5.0}));
  const adBanners = botData.slice(5, 11);

  const controlFilterSidebar = useCallback(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY.current && currentScrollY > 200) {
      setShowFilter(false);
    } else {
      setShowFilter(true);
    }
    lastScrollY.current = currentScrollY;
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', controlFilterSidebar);
    return () => {
      window.removeEventListener('scroll', controlFilterSidebar);
    };
  }, [controlFilterSidebar]);

  const renderContent = () => {
    switch (activeTab) {
      case 'Алго-боты':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {botData.map((bot, index) => (
              <BotCard key={index} bot={bot} onDetailsClick={() => onBotDetailsClick(bot)} onBuyClick={() => onNavigate('register')} />
            ))}
          </div>
        );
      case 'Сигналы':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {signalData.map((signal) => (
              <SignalCard key={signal.id} signal={signal} onDetailsClick={() => onSignalDetailsClick(signal)} />
            ))}
          </div>
        );
      default:
        return <div className="text-center py-10"><p>{`Контент для "${activeTab}" будет добавлен в будущем.`}</p></div>;
    }
  };

  const FilterSidebar = () => {
    const [price, setPrice] = useState([0, 1000]);
    const [isFree, setIsFree] = useState(false);

    return (
      <div className="bg-white rounded-2xl shadow-sm p-6 h-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-tt-travels text-xl font-bold">Фильтры</h3>
          <Button variant="icon" className="lg:hidden" onClick={() => setFilterOpen(false)}>{React.createElement(ICONS.close)}</Button>
        </div>
        <div className="space-y-6">
          <div>
            <label className="font-semibold mb-2 block">Цена</label>
            <ReactSlider
              className="h-1 w-full bg-grey-2 rounded-full my-6"
              thumbClassName="h-5 w-5 -top-2 bg-main rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main"
              trackClassName="h-1 bg-main rounded-full"
              value={price}
              onChange={setPrice}
              min={0}
              max={1000}
              pearling
              minDistance={10}
            />
            <div className="flex items-center gap-2 mt-2">
              <input type="text" placeholder="от" value={price[0]} onChange={e => setPrice([+e.target.value, price[1]])} className="w-full p-2 border border-grey-2 rounded-lg"/>
              <span className="text-text-grey">-</span>
              <input type="text" placeholder="до" value={price[1]} onChange={e => setPrice([price[0], +e.target.value])} className="w-full p-2 border border-grey-2 rounded-lg"/>
            </div>
          </div>
          <div>
            <label className="flex items-center justify-between cursor-pointer">
              <span className="font-semibold text-lg">Бесплатные</span>
              <div onClick={() => setIsFree(!isFree)} className={`w-14 h-8 flex items-center rounded-full p-1 duration-300 ${isFree ? 'bg-green-service' : 'bg-grey-2'}`}>
                <div className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ${isFree ? 'translate-x-6' : ''}`}></div>
              </div>
            </label>
          </div>
          <div>
            <label className="font-semibold mb-2 block">Рейтинг</label>
            <div className="space-y-2">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="form-checkbox text-main focus:ring-main rounded"/>
                <span className="ml-2 flex items-center">Выше 3 {React.createElement(ICONS.star, { className: "w-4 h-4 text-yellow-400 ml-1" })}</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="form-checkbox text-main focus:ring-main rounded"/>
                <span className="ml-2 flex items-center">Выше 4 {React.createElement(ICONS.star, { className: "w-4 h-4 text-yellow-400 ml-1" })}</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="form-checkbox text-main focus:ring-main rounded"/>
                <span className="ml-2 flex items-center">Выше 5 {React.createElement(ICONS.star, { className: "w-4 h-4 text-yellow-400 ml-1" })}</span>
              </label>
            </div>
          </div>
          <div>
            <div className="space-y-2">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="form-checkbox text-main focus:ring-main rounded"/>
                <span className="ml-2">Есть отзывы</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="form-checkbox text-main focus:ring-main rounded"/>
                <span className="ml-2">Есть аренда</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex gap-6">
      {/* Main Content */}
      <div className="flex-grow min-w-0">
        <section className="mb-8">
           <h2 className="font-bold text-2xl mb-4 text-center">Рекламные баннеры</h2>
           <div className="flex justify-center gap-6 flex-wrap">
            {adBanners.slice(0, 2).map((ad, index) => (
              <div key={index} className="w-full md:w-2/5">
                <AdCard image={ad.image} title="Рекламный баннер" url="#!" />
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="font-bold text-2xl mb-4">Рекомендуемые</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedBots.map((bot, index) => (
              <BotCard key={index} bot={bot} onDetailsClick={() => onBotDetailsClick(bot)} onBuyClick={() => onNavigate('register')} />
            ))}
          </div>
        </section>

        <div className="bg-white rounded-2xl shadow-sm p-4 mb-6">
          <div className="border-b border-grey-2 flex items-center justify-between flex-wrap">
            <nav className="flex">
              {tabs.map(tab => (
                <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 md:px-6 py-3 font-semibold transition-colors text-sm md:text-base ${activeTab === tab ? 'text-main border-b-2 border-main' : 'text-text-grey hover:bg-grey-2/30'}`}>
                  {tab}
                </button>
              ))}
            </nav>
          </div>
          <div className="p-4 flex items-center justify-between bg-grey-1/50 rounded-b-2xl flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-text-grey">Сортировать по:</span>
              <select className="bg-white border border-grey-2 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-main">
                <option>Популярные</option>
                <option>Новинки</option>
                <option>Дешевле</option>
                <option>Дороже</option>
                <option>С высоким рейтингом</option>
                <option>С большими скидками</option>
              </select>
            </div>
            <Button variant="small-outline" className="lg:hidden" onClick={() => setFilterOpen(true)}>Фильтры</Button>
          </div>
        </div>
        
        <div className="p-1">{renderContent()}</div>
      </div>

      {/* Sidebar for Desktop */}
      <aside className="w-80 flex-shrink-0 hidden lg:block space-y-6">
        <div className={`sticky transition-transform duration-300 ${showFilter ? 'top-24' : '-translate-y-full'}`}>
          <FilterSidebar />
        </div>
        <div className="bg-white rounded-2xl shadow-sm p-4">
          <h4 className="font-semibold mb-2 block">Реклама</h4>
          <div className="grid grid-cols-2 gap-4">
            {brokerAds.map(ad => <BrokerAdCard key={ad.name} image={ad.image} title={ad.name} />)}
          </div>
        </div>
      </aside>

      {/* Sidebar for Mobile/Tablet (Drawer) */}
      <div className={`fixed inset-0 z-40 transform lg:hidden ${isFilterOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="fixed inset-0 bg-black/30" onClick={() => setFilterOpen(false)}></div>
        <div className="relative z-50 w-80 h-full bg-white ml-auto p-4">
          <FilterSidebar />
        </div>
      </div>
    </div>
  );
};

const feedPosts = [
  {
    id: 1,
    author: {
      name: 'CryptoWhale',
      avatar: 'https://placehold.co/40x40/E2BAA4/000000?text=CW'
    },
    media: {
      type: 'image',
      url: botImages[1]
    },
    title: 'Анализ рынка BTC: куда движется главная криптовалюта?',
    description: 'Глубокий анализ текущей ситуации на рынке Bitcoin. Рассматриваем ключевые уровни поддержки и сопротивления, а также возможные сценарии развития событий на ближайшие недели. #BTC #Криптовалюта #Аналитика',
    views: '12.5k',
    likes: 1200,
    reposts: 45,
    commentsCount: 89,
    comments: [
      { id: 1, author: 'User1', avatar: 'https://placehold.co/32x32/333/fff?text=U1', text: 'Отличный анализ!', likes: 15 },
      { id: 2, author: 'User2', avatar: 'https://placehold.co/32x32/4682B4/fff?text=U2', text: 'Согласен, но я бы еще добавил пару факторов.', likes: 8 },
    ]
  },
  {
    id: 2,
    author: {
      name: 'Oil Baron',
      avatar: 'https://placehold.co/40x40/333/fff?text=OB'
    },
    media: {
      type: 'video',
      url: botImages[0],
      thumbnail: botImages[0]
    },
    title: 'Нефтяные фьючерсы: стоит ли ожидать роста?',
    description: 'Видеообзор рынка нефти. Обсуждаем влияние геополитических факторов и данных по запасам на цены. #Нефть #Фьючерсы #Инвестиции',
    views: '8.2k',
    likes: 850,
    reposts: 23,
    commentsCount: 45,
    comments: []
  },
  {
    id: 3,
    author: {
      name: 'Gold Bug',
      avatar: 'https://placehold.co/40x40/DAA520/fff?text=GB'
    },
    media: null,
    title: 'Золото как защитный актив в условиях инфляции',
    description: 'Текстовый пост о роли золота в инвестиционном портфеле. Почему драгоценный металл остается актуальным и как его использовать для хеджирования рисков. #Золото #Инфляция #Портфель',
    views: '25.1k',
    likes: 2300,
    reposts: 150,
    commentsCount: 210,
    comments: []
  },
  {
    id: 4,
    author: {
      name: 'Forex Guru',
      avatar: 'https://placehold.co/40x40/4682B4/fff?text=FG'
    },
    media: {
      type: 'image',
      url: botImages[3]
    },
    title: 'Торговая стратегия для EUR/USD на эту неделю',
    description: 'Разбор торговой стратегии для самой популярной валютной пары. Точки входа, стоп-лоссы и цели. #EURUSD #Forex #Трейдинг',
    views: '5.7k',
    likes: 600,
    reposts: 15,
    commentsCount: 33,
    comments: []
  },
  {
    id: 5,
    author: {
      name: 'Index Investor',
      avatar: 'https://placehold.co/40x40/2E8B57/fff?text=II'
    },
    media: {
      type: 'image',
      url: botImages[4]
    },
    title: 'S&P 500: новый исторический максимум?',
    description: 'Анализируем перспективы американского фондового рынка. Есть ли еще потенциал для роста и какие сектора выглядят наиболее привлекательно. #SP500 #Акции #Рынок',
    views: '18.9k',
    likes: 1800,
    reposts: 98,
    commentsCount: 150,
    comments: []
  }
];

export const AdCard = ({ image, title, url }) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="block bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
    <div className="relative h-32">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center p-2">
        <h4 className="text-white font-bold text-center">{title}</h4>
      </div>
    </div>
  </a>
);

const FeedSidebar = () => {
  const [hashtags, setHashtags] = useState([]);
  const [hashtagInput, setHashtagInput] = useState('');

  const addHashtag = (tag) => {
    if (tag && !hashtags.includes(tag)) {
      setHashtags([...hashtags, tag]);
    }
    setHashtagInput('');
  };

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-2xl shadow-sm p-4">
        <label className="font-semibold mb-2 block">Сортировка</label>
        <select className="w-full p-3 border border-grey-2 rounded-lg">
          <option>Новые</option>
          <option>Старые</option>
          <option>По лайкам</option>
          <option>По репостам</option>
        </select>
      </div>
      <div className="bg-white rounded-2xl shadow-sm p-4">
        <label className="font-semibold mb-2 block">Хештеги</label>
        <input
          type="text"
          placeholder="Найти по хештегу..."
          value={hashtagInput}
          onChange={(e) => setHashtagInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addHashtag(e.target.value)}
          className="w-full p-3 border border-grey-2 rounded-lg"
        />
        <div className="flex flex-wrap gap-2 mt-2">
          {hashtags.map(tag => (
            <div key={tag} className="bg-orange/20 text-orange font-semibold px-3 py-1 rounded-full text-sm">
              #{tag}
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow-sm p-4">
        <label className="font-semibold mb-2 block">Вложения</label>
        <div className="grid grid-cols-3 gap-2">
          {['Фото', 'Видео', 'Без вложений', 'Документы', 'Опросы'].map(type => (
            <label key={type} className="flex items-center text-sm">
              <input type="checkbox" className="form-checkbox text-main focus:ring-main rounded"/>
              <span className="ml-2">{type}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

const FeedPage = ({ onOpenModal }) => {
  const [postDetailModalOpen, setPostDetailModalOpen] = useState(false);
  const [activePost, setActivePost] = useState(null);
  const [showFilter, setShowFilter] = useState(true);
  const lastScrollY = useRef(0);

  const controlFilterSidebar = useCallback(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY.current && currentScrollY > 200) {
      setShowFilter(false);
    } else {
      setShowFilter(true);
    }
    lastScrollY.current = currentScrollY;
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', controlFilterSidebar);
    return () => {
      window.removeEventListener('scroll', controlFilterSidebar);
    };
  }, [controlFilterSidebar]);


  const openPostDetails = (post) => {
    setActivePost(post);
    setPostDetailModalOpen(true);
  };

  const closePostDetails = () => {
    setPostDetailModalOpen(false);
    setActivePost(null);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="flex-grow space-y-6 lg:w-2/3">
        {/* Create Post */}
        <div className="bg-white rounded-2xl shadow-sm p-4">
          <div className="flex items-start gap-4">
            <img src="https://placehold.co/40x40/E2BAA4/000000?text=User" alt="User" className="w-10 h-10 rounded-full" />
            <div className="flex-grow">
              <textarea
                placeholder="Что нового?"
                className="w-full p-2 bg-grey-1 rounded-lg border border-grey-2 focus:ring-main focus:border-main resize-none"
                rows="2"
              ></textarea>
              <div className="flex justify-between items-center mt-2">
                <div className="flex gap-2">
                  <Button variant="icon">{React.createElement(ICONS.attachImage)}</Button>
                  <Button variant="icon">{React.createElement(ICONS.attachVideo)}</Button>
                  <Button variant="icon">{React.createElement(ICONS.attachFile)}</Button>
                </div>
                <Button variant="small-classic" onClick={onOpenModal}>Опубликовать</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Posts */}
        {feedPosts.map(post => (
          <div key={post.id} className="bg-white rounded-2xl shadow-sm cursor-pointer hover:shadow-lg transition-shadow" onClick={() => openPostDetails(post)}>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full mr-3" />
                <div>
                  <h4 className="font-bold">{post.author.name}</h4>
                  <p className="text-sm text-text-grey">Автор</p>
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2">{post.title}</h3>
              <p className="text-text-grey mb-4 line-clamp-3">{post.description}</p>
            </div>
            {post.media && (
              <div className="relative">
                <img src={post.media.thumbnail || post.media.url} alt={post.title} className="w-full h-auto max-h-96 object-cover" />
                {post.media.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <button className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                    </button>
                  </div>
                )}
              </div>
            )}
            <div className="flex justify-between items-center p-2 border-t border-grey-2">
                <div className="flex items-center gap-4 text-text-grey">
                    <Button variant="icon" className="flex items-center gap-2 hover:text-main">
                        {React.createElement(ICONS.heart, { className: "w-5 h-5" })} {post.likes}
                    </Button>
                    <Button variant="icon" className="flex items-center gap-2 hover:text-main">
                        {React.createElement(ICONS.messages, { className: "w-5 h-5" })} {post.commentsCount}
                    </Button>
                    <Button variant="icon" className="flex items-center gap-2 hover:text-main">
                        {React.createElement(ICONS.repost, { className: "w-5 h-5" })} {post.reposts}
                    </Button>
                </div>
                <div className="flex items-center gap-2 text-text-grey">
                    {React.createElement(ICONS.eye, { className: "w-5 h-5" })}
                    <span>{post.views}</span>
                </div>
            </div>
          </div>
        ))}
      </div>
      <aside className="w-full lg:w-1/3 lg:flex-shrink-0 space-y-6">
        <div className={`sticky transition-transform duration-300 ${showFilter ? 'top-24' : '-translate-y-full'}`}>
            <FeedSidebar />
        </div>
        <div className="bg-white rounded-2xl shadow-sm p-4">
          <h4 className="font-semibold mb-2 block">Реклама</h4>
          <div className="grid grid-cols-2 gap-4">
            {brokerAds.map(ad => <BrokerAdCard key={ad.name} image={ad.image} title={ad.name} />)}
          </div>
        </div>
      </aside>
      {postDetailModalOpen && activePost && <PostDetailModal post={activePost} onClose={closePostDetails} />}
    </div>
  );
};

const PostDetailModal = ({ post, onClose }) => {
  const [comment, setComment] = useState('');
  const [showEmojis, setShowEmojis] = useState(false);
  const emojis = ['😀', '😂', '😍', '🤔', '👍', '🙏', '🚀', '🔥', '💰', '📈', '📉', '🎉'];

  if (!post) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl w-full max-w-2xl h-full max-h-[90vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
        <div className="p-4 border-b border-grey-2 flex justify-between items-center flex-shrink-0">
          <h2 className="font-bold text-xl truncate">{post.title}</h2>
          <Button variant="icon" onClick={onClose}>{React.createElement(ICONS.close)}</Button>
        </div>
        <div className="flex-grow overflow-y-auto">
          {post.media && <img src={post.media.url} alt={post.title} className="w-full h-auto max-h-96 object-contain bg-gray-100" />}
          <div className="p-6">
            <h3 className="font-bold text-2xl mb-2">{post.title}</h3>
            <p className="text-text-grey leading-relaxed whitespace-pre-wrap">{post.description}</p>
            <hr className="my-6"/>
            <h4 className="font-bold text-xl mb-4">Комментарии ({post.commentsCount})</h4>
            <div className="space-y-4">
              {post.comments.map(c => (
                <div key={c.id} className="flex items-start gap-3">
                  <img src={c.avatar} alt={c.author} className="w-9 h-9 rounded-full"/>
                  <div>
                    <p className="font-semibold">{c.author}</p>
                    <p className="text-text-grey">{c.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="p-4 border-t border-grey-2 flex-shrink-0">
          <div className="flex items-center bg-grey-1 rounded-full px-2">
            <input type="text" placeholder="Ваш комментарий..." className="flex-grow bg-transparent p-3 focus:outline-none" value={comment} onChange={(e) => setComment(e.target.value)} />
            <div className="relative">
              <Button variant="icon" onClick={() => setShowEmojis(s => !s)}>{React.createElement(ICONS.smiley)}</Button>
              {showEmojis && (
                <div className="absolute bottom-full right-0 mb-2 bg-white shadow-lg rounded-lg p-2 grid grid-cols-6 gap-1 w-48">
                  {emojis.map(emoji => <button key={emoji} onClick={() => setComment(c => c + emoji)} className="p-2 rounded-lg hover:bg-grey-1">{emoji}</button>)}
                </div>
              )}
            </div>
            <Button variant="icon" className="text-main">{React.createElement(ICONS.send)}</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

const HomePage = ({ onNavigate }) => { 
    const [selectedUpdate, setSelectedUpdate] = useState(null); 
    const platformUpdates = [ 
        { id: 1, image: botImages[10], title: "Запуск нового конструктора ботов", date: "10.08.2025", shortText: "Мы полностью переработали конструктор, сделав его еще более мощным и интуитивно понятным. Теперь вы можете...", fullText: "Мы полностью переработали конструктор, сделав его еще более мощным и интуитивно понятным. Теперь вы можете использовать более 100 технических индикаторов, комбинировать их в сложные логические цепочки и тестировать на данных за последние 10 лет. Интерфейс стал чище, а подсказки на каждом шаге помогут новичкам быстрее освоиться и создать своего первого прибыльного бота." }, 
        { id: 2, image: botImages[11], title: "Партнерская программа v2.0", date: "05.08.2025", shortText: "Представляем обновленную партнерскую программу с повышенными комиссиями и новыми инструментами для...", fullText: "Представляем обновленную партнерскую программу с повышенными комиссиями и новыми инструментами для привлечения клиентов. Теперь вы будете получать до 50% от всех комиссий привлеченных вами пользователей пожизненно. Мы также добавили готовые рекламные материалы и подробную статистику в ваш личный кабинет для отслеживания эффективности." }, 
        { id: 3, image: botImages[12], title: "Новые криптовалютные пары на споте", date: "01.08.2025", shortText: "Добавлена поддержка 25 новых криптовалютных пар для ваших торговых стратегий, включая популярные...", fullText: "Добавлена поддержка 25 новых криптовалютных пар для ваших торговых стратегий, включая популярные мем-коины и токены из сектора GameFi. Теперь ваши боты могут работать с еще большим количеством активов, открывая новые возможности для диверсификации и поиска арбитражных ситуаций. Полный список доступен в разделе документации." } 
    ]; 
    
    const UpdateModal = ({ update, onClose }) => { 
        if (!update) return null; 
        return ( 
            <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" onClick={onClose}> 
                <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col" onClick={(e) => e.stopPropagation()}> 
                    <div className="p-4 border-b border-grey-2 flex justify-between items-center"> 
                        <h2 className="font-bold text-xl">{update.title}</h2> 
                        <Button variant="icon" onClick={onClose}>{React.createElement(ICONS.close)}</Button> 
                    </div> 
                    <div className="flex-grow overflow-y-auto p-6"> 
                        <img src={update.image} alt={update.title} className="w-full h-64 object-cover rounded-lg mb-4" /> 
                        <p className="text-sm text-text-grey mb-4">{update.date}</p> 
                        <p className="text-text-grey leading-relaxed">{update.fullText}</p> 
                    </div> 
                </div> 
            </div> 
        ); 
    }; 
    
    return ( 
        <div className="space-y-12"> 
            {/* Welcome Banner */}
            <section className="rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between text-white relative overflow-hidden min-h-[150px]">
                <img src={`${process.env.PUBLIC_URL}/Frame 5655.svg`} alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div className="relative z-10 md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                    <h1 className="font-bold text-4xl mb-4">Добро пожаловать</h1>
                    <p className="text-lg">Алготрейдинговые боты, готовые сигнальные решения и единый счёт для контроля сделок — всё в одном месте: подключайтесь к стратегиям без сложной установки, пользуйтесь гибкими условиями и низкими комиссиями, получайте максимум возможностей для создания ботов и инвестиций с диверсификацией средств.</p>
                </div>
                <div className="relative z-10 w-full md:w-1/2 flex items-center justify-end">
                    <img src={`${process.env.PUBLIC_URL}/608e59f7-475d-4d93-a2f0-163b70558ca4.png`} alt="Welcome Illustration" className="w-[750px] h-[300px] object-contain mr-0" />
                </div>
            </section>

            <QuotesSection onNavigate={onNavigate} />
            
            {/* Partner Ads */} 
            <section> 
                <h2 className="font-bold text-2xl mb-4">Реклама партнеров</h2> 
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"> 
                    <AdCard image={botImages[5]} title="АТОН - ваш брокер" url="#!" /> 
                    <AdCard image={botImages[6]} title="БКС Инвестиции" url="#!" /> 
                    <AdCard image={botImages[7]} title="Альфа Инвестиции" url="#!" /> 
                    <AdCard image={botImages[8]} title="Брокер Цифра" url="#!" /> 
                    <AdCard image={botImages[9]} title="Еще один брокер" url="#!" /> 
                </div> 
            </section> 
            
            {/* How to Start Section */} 
            <section> 
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> 
                    <div className="bg-orange text-white rounded-2xl p-6 flex flex-col"> 
                        {React.createElement(ICONS.help, { className: "w-10 h-10 mb-4" })} 
                        <h3 className="font-bold text-2xl mb-2">С чего начать</h3> 
                        <p className="text-white/90 mb-4 flex-grow">Первый шаг в мир алгоритмической торговли - это регистрация на нашей платформе. После этого вы получите доступ ко всем инструментам. Рекомендуем изучить основные разделы: Маркетплейс для готовых решений и Ленту для общения с сообществом. Не бойтесь экспериментировать с бесплатными ботами, чтобы понять механику.</p> 
                        <button className="mt-auto text-white font-semibold border-b border-white/50 hover:border-white inline-flex items-center gap-2 self-start">Узнать больше {React.createElement(ICONS.arrowRight, { className: "w-4 h-4" })}</button> 
                    </div> 
                    <div className="bg-orange text-white rounded-2xl p-6 flex flex-col"> 
                        {React.createElement(ICONS.shoppingCart, { className: "w-10 h-10 mb-4" })} 
                        <h3 className="font-bold text-2xl mb-2">Как подключиться к алго-боту</h3> 
                        <p className="text-white/90 mb-4 flex-grow">В разделе Маркетплейс вы найдете сотни готовых ботов. Выберите понравившегося, изучите его статистику и описание. Нажмите кнопку "Купить" или "Арендовать", чтобы добавить его в свой портфель. После этого бот появится на вашем Рабочем столе, где вы сможете его активировать и следить за его работой в реальном времени.</p> 
                        <button className="mt-auto text-white font-semibold border-b border-white/50 hover:border-white inline-flex items-center gap-2 self-start">Читать инструкцию {React.createElement(ICONS.arrowRight, { className: "w-4 h-4" })}</button> 
                    </div> 
                    <div className="bg-orange text-white rounded-2xl p-6 flex flex-col"> 
                        {React.createElement(ICONS.plus, { className: "w-10 h-10 mb-4" })} 
                        <h3 className="font-bold text-2xl mb-2">Как создать алго-бота</h3> 
                        <p className="text-white/90 mb-4 flex-grow">Для продвинутых пользователей мы предлагаем мощный, но простой конструктор ботов. Вам не нужно быть программистом. Выбирайте индикаторы, задавайте условия для входа и выхода из сделок, настраивайте управление рисками. Протестируйте свою стратегию на исторических данных и, если результат вас устроит, опубликуйте своего бота в Маркетплейсе.</p> 
                        <button className="mt-auto text-white font-semibold border-b border-white/50 hover:border-white inline-flex items-center gap-2 self-start">Перейти в конструктор {React.createElement(ICONS.arrowRight, { className: "w-4 h-4" })}</button> 
                    </div> 
                </div> 
            </section> 
            
            {/* Investments Section */} 
            <section> 
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8"> 
                    <div> 
                        <h3 className="font-bold text-3xl mb-4">Инвесторам</h3> 
                        <div className="space-y-4"> 
                            <div className="bg-white rounded-2xl p-6 flex items-start gap-6"> 
                                <img src={`${process.env.PUBLIC_URL}/assets_task_01jye4eggtfk7ahzf9qf79dmxy_1750673668_img_3 1.svg`} alt="" className="w-16 h-16"/> 
                                <div> 
                                    <h4 className="font-bold text-xl mb-1">Единый счет</h4> 
                                    <p className="text-text-grey">Управляйте всеми вашими инвестициями с одного счета. Пополняйте баланс, выводите средства и отслеживайте финансовые потоки в одном месте. Мы обеспечиваем максимальную прозрачность и безопасность ваших активов.</p> 
                                </div> 
                            </div> 
                            <div className="bg-white rounded-2xl p-6 flex items-start gap-6"> 
                                <img src={`${process.env.PUBLIC_URL}/assets_task_01jye57frdf2paxg768scs4s8p_1750674491_img_2 1.png`} alt="" className="w-16 h-16"/> 
                                <div> 
                                    <h4 className="font-bold text-xl mb-1">Инвестиционные продукты</h4> 
                                    <p className="text-text-grey">Выбирайте из широкого спектра готовых продуктов: от консервативных ботов для долгосрочных инвестиций до высокорисковых стратегий для агрессивной торговли. Диверсифицируйте свой портфель в несколько кликов.</p> 
                                </div> 
                            </div> 
                            <div className="bg-white rounded-2xl p-6 flex items-start gap-6"> 
                                <img src={`${process.env.PUBLIC_URL}/assets_task_01jye5x9b8faqtakmxk93mnj2t_1750675199_img_3 1.png`} alt="" className="w-16 h-16"/> 
                                <div> 
                                    <h4 className="font-bold text-xl mb-1">Личный рабочий стол</h4> 
                                    <p className="text-text-grey">Ваш персональный центр управления. Отслеживайте доходность, анализируйте производительность каждого бота, получайте отчеты и настраивайте уведомления. Все ключевые метрики вашего портфеля на одном экране.</p> 
                                </div> 
                            </div> 
                        </div> 
                    </div> 
                    <div> 
                        <h3 className="font-bold text-3xl mb-4">Создателям алго-ботов и экспертов</h3> 
                        <div className="space-y-4"> 
                            <div className="bg-white rounded-2xl p-6 flex items-start gap-6"> 
                                <img src={`${process.env.PUBLIC_URL}/assets_task_01jye5yc7pe6w9d2y08qzdf1xt_1750675239_img_1 1.png`} alt="" className="w-16 h-16"/> 
                                <div> 
                                    <h4 className="font-bold text-xl mb-1">Создание и продажа</h4> 
                                    <p className="text-text-grey">Превратите свои торговые идеи в источник дохода. Наш интуитивно понятный конструктор позволяет создавать ботов без написания кода. Опубликуйте свой продукт в Маркетплейсе и начните зарабатывать на продажах и аренде.</p> 
                                </div> 
                            </div> 
                            <div className="bg-white rounded-2xl p-6 flex items-start gap-6"> 
                                <img src={`${process.env.PUBLIC_URL}/Analytics_set.svg`} alt="" className="w-16 h-16"/> 
                                <div> 
                                    <h4 className="font-bold text-xl mb-1">Аналитика по продуктам</h4> 
                                    <p className="text-text-grey">Получайте подробную статистику по вашим ботам: количество подписчиков, доходность, максимальная просадка и другие ключевые показатели. Анализируйте данные, чтобы улучшать свои стратегии и привлекать больше клиентов.</p> 
                                </div> 
                            </div> 
                            <div className="bg-white rounded-2xl p-6 flex items-start gap-6"> 
                                <img src={`${process.env.PUBLIC_URL}/assets_task_01jye63bnrfm2vt0y8at6hvj98_1750675399_img_1 1.png`} alt="" className="w-16 h-16"/> 
                                <div> 
                                    <h4 className="font-bold text-xl mb-1">Платформа для продажи ботов</h4> 
                                    <p className="text-text-grey">Мы предоставляем вам готовую инфраструктуру для ведения бизнеса. Управляйте ценами, предлагайте скидки, общайтесь с клиентами и получайте пассивный доход. Сосредоточьтесь на разработке, а мы позаботимся об остальном.</p> 
                                </div> 
                            </div> 
                        </div> 
                    </div> 
                </div> 
            </section> 
            
            {/* Platform Updates Section */} 
            <section> 
                <h2 className="font-bold text-3xl mb-4">Обновления платформы</h2> 
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"> 
                    {platformUpdates.map(update => ( 
                        <div key={update.id} className="bg-white rounded-2xl shadow-lg flex flex-col cursor-pointer" onClick={() => setSelectedUpdate(update)}> 
                            <img src={update.image} alt={update.title} className="w-full h-40 object-cover rounded-t-2xl" /> 
                            <div className="p-6 flex flex-col flex-grow"> 
                                <h3 className="font-bold text-xl mb-2">{update.title}</h3> 
                                <p className="text-sm text-text-grey mb-2">{update.date}</p> 
                                <p className="text-text-grey text-sm mb-4 flex-grow">{update.shortText}</p> 
                                <div className="flex justify-end mt-auto"> 
                                    <Button variant="small-outline" style={{width: '90px'}} className="!border-orange !text-orange hover:!bg-orange hover:!text-white"> Подробнее </Button> 
                                </div> 
                            </div> 
                        </div> 
                    ))} 
                </div> 
            </section> 
            <UpdateModal update={selectedUpdate} onClose={() => setSelectedUpdate(null)} /> 
        </div> 
    ); 
};

const PersonsPage = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('Авторы ботов');
  const tabs = ['Авторы ботов', 'Авторы услуг', 'Авторы сигналов'];

  const getLeaderboardData = useCallback(() => {
    const shuffled = [...personasData].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5);
  }, []);

  const [leaderboardData, setLeaderboardData] = useState(getLeaderboardData());

  useEffect(() => {
    setLeaderboardData(getLeaderboardData());
  }, [activeTab, getLeaderboardData]);

  const LeaderboardPodium = ({ leaderboardData }) => {
    if (!leaderboardData || leaderboardData.length < 5) {
      return <div className="text-center p-8">Недостаточно данных для отображения подиума.</div>;
    }

    const [first, second, third, fourth, fifth] = leaderboardData;

    const PodiumCard = ({ profile, rank, size, alignment }) => {
      const sizeClasses = {
        large: 'w-32 h-32 md:w-40 md:h-40 text-xl',
        medium: 'w-28 h-28 md:w-32 md:h-32 text-lg',
        small: 'w-24 h-24 md:w-28 md:h-28 text-base'
      };
      const rankColors = {
        1: 'bg-yellow-400 border-yellow-400',
        2: 'bg-gray-300 border-gray-300',
        3: 'bg-yellow-600 border-yellow-600',
      };

      return (
        <div className={`flex flex-col items-center gap-2 p-2 text-center ${alignment}`}>
          <div className="relative">
            <img src={profile.avatar} alt={profile.name} className={`${sizeClasses[size]} rounded-full border-4 shadow-lg ${rank === 1 ? 'border-yellow-400' : 'border-gray-200'}`} />
            <div className={`absolute -top-2 -right-2 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-white font-bold ${rankColors[rank] || 'bg-gray-400'}`}>
              {rank}
            </div>
          </div>
          <h4 className={`font-bold ${sizeClasses[size]}`}>{profile.name}</h4>
          <p className="text-sm text-text-grey">{profile.specialization}</p>
        </div>
      );
    };

    return (
      <div className="flex justify-center items-end gap-2 md:gap-4 pt-8 w-full">
        <div style={{ order: 0 }}><PodiumCard profile={fourth} rank={4} size="small" alignment="self-end" /></div>
        <div style={{ order: 1 }}><PodiumCard profile={second} rank={2} size="medium" alignment="self-end" /></div>
        <div style={{ order: 2 }}><PodiumCard profile={first} rank={1} size="large" alignment="self-center" /></div>
        <div style={{ order: 3 }}><PodiumCard profile={third} rank={3} size="medium" alignment="self-end" /></div>
        <div style={{ order: 4 }}><PodiumCard profile={fifth} rank={5} size="small" alignment="self-end" /></div>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      {/* Leaderboard Section */}
      <section className="bg-white rounded-2xl shadow-sm p-6">
        <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
            <h2 className="font-bold text-2xl text-center mb-4">Лидеры Платформы</h2>
            <div className="flex justify-center border-b border-grey-2 mb-6 overflow-x-auto">
              {tabs.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 sm:px-6 py-2 font-semibold transition-colors whitespace-nowrap ${activeTab === tab ? 'text-main border-b-2 border-main' : 'text-text-grey'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <LeaderboardPodium leaderboardData={leaderboardData} />
        </div>
      </section>

      {/* Main Personas Grid */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {personasData.map((profile) => (
            <div key={profile.id} className="bg-white rounded-2xl p-4 shadow-sm">
                <ProfileCard profile={profile} isFavorited={false} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

function App() {
  const [page, setPage] = useState('landing'); // landing, login, register, app
  const [activePage, setActivePage] = useState('Главная'); // For main app navigation
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [selectedBot, setSelectedBot] = useState(null);
  const [selectedSignal, setSelectedSignal] = useState(null);
  const [selectedInstrumentId, setSelectedInstrumentId] = useState(null);
  const [showProductDraft, setShowProductDraft] = useState(false);
  const [newProductData, setNewProductData] = useState(null);

  const handleNavigate = (target, data) => {
    if (target === 'draft') {
        setShowProductDraft(true);
        setPage('app');
        setActivePage('draft');
    } else if (target.startsWith('instrument/')) {
      const instrumentId = target.split('/')[1];
      setSelectedInstrumentId(instrumentId);
      setPage('app');
      setActivePage('instrument'); // Special page state
    } else if (['Лента', 'Маркетплейс', 'Персоны', 'Рабочий стол', 'Сообщения', 'Избранное', 'Помощь', 'Главная'].includes(target)) {
      setPage('app');
      setActivePage(target);
      setSelectedBot(null);
      setSelectedSignal(null);
      setSelectedInstrumentId(null);
      setShowProductDraft(false);
    } else {
      setPage(target);
    }
  };

  const handleLogout = () => {
    setPage('landing');
    setActivePage('Главная');
    setShowProductDraft(false);
  };

  const handleBotDetailsClick = (bot) => {
    setSelectedBot(bot);
  }

  const handleSignalDetailsClick = (signal) => {
    setSelectedSignal(signal);
  }

  const handleProductCreated = (productData) => {
      setNewProductData(productData);
      setModalOpen(false);
      handleNavigate('draft');
  }

  const renderPage = () => {
    if (page === 'landing') {
      return <LandingPage onNavigate={handleNavigate} botData={botData} botImages={botImages} />;
    }
    if (page === 'login') {
      return <LoginPage onNavigate={handleNavigate} />;
    }
    if (page === 'register') {
      return <RegistrationPage onNavigate={handleNavigate} />;
    }
    if (page === 'app') {
      let ComponentToRender;

      if (showProductDraft) {
        ComponentToRender = <ProductDraftPage productData={newProductData} />;
      } else if (selectedBot) {
        ComponentToRender = <BotDetailsPage bot={selectedBot} onBack={() => setSelectedBot(null)} isPurchased={activePage === 'Рабочий стол'} />;
      } else if (selectedSignal) {
        ComponentToRender = <SignalDetailsPage signal={selectedSignal} onBack={() => setSelectedSignal(null)} />;
      } else if (activePage === 'instrument' && selectedInstrumentId) {
        ComponentToRender = <InstrumentDetailsPage instrumentId={selectedInstrumentId} onBack={() => handleNavigate('Главная')} />;
      } else {
        switch (activePage) {
          case 'Главная':
            ComponentToRender = <HomePage onNavigate={handleNavigate} />;
            break;
          case 'Лента':
            ComponentToRender = <FeedPage onOpenModal={() => setModalOpen(true)} />;
            break;
          case 'Маркетплейс':
            ComponentToRender = <Marketplace onNavigate={handleNavigate} botData={botData} onBotDetailsClick={handleBotDetailsClick} onSignalDetailsClick={handleSignalDetailsClick} />;
            break;
          case 'Персоны':
            ComponentToRender = <PersonsPage onNavigate={handleNavigate} />;
            break;
          case 'Рабочий стол':
            ComponentToRender = <DesktopPage botData={botData} onBotDetailsClick={handleBotDetailsClick} onSignalDetailsClick={handleSignalDetailsClick} />;
            break;
        case 'Сообщения':
            ComponentToRender = <MessagesPage />;
            break;
          case 'Избранное':
            ComponentToRender = <FavoritesPage />;
            break;
          case 'Помощь':
            ComponentToRender = <HelpCenterPage onNavigate={handleNavigate} />;
            break;
          default:
            ComponentToRender = <div className="text-center p-10">Раздел в разработке</div>;
        }
      }

      return (
        <div className="bg-bg-light min-h-screen flex items-start">
          <Sidebar activePage={activePage} onNavigate={handleNavigate} isMobileMenuOpen={isMobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
          <div className="flex-grow flex flex-col min-w-0">
            <Header onOpenModal={() => setModalOpen(true)} setMobileMenuOpen={setMobileMenuOpen} onLogout={handleLogout} />
            <main className="flex-grow p-4 lg:p-6">
              {ComponentToRender}
            </main>
          </div>
          <CreateModal 
            isOpen={isModalOpen} 
            onClose={() => setModalOpen(false)}
            isVerified={isVerified}
            onVerificationComplete={() => {
              setIsVerified(true);
            }}
            onProductCreated={handleProductCreated}
          />
        </div>
      );
    }
    return null;
  };

  return renderPage();
}

export default App;