'''
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
    </aside>
  );
};

const CommentSection = ({ post, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-xl">Комментарии к посту "{post.title}"</h2>
          <Button variant="icon" onClick={onClose}>{React.createElement(ICONS.close)}</Button>
        </div>
        <div className="flex-grow overflow-y-auto space-y-4">
          {post.comments && post.comments.length > 0 ? (
            post.comments.map(comment => (
              <div key={comment.id} className="flex items-start gap-3">
                <img src={comment.avatar} alt={comment.author} className="w-8 h-8 rounded-full" />
                <div className="bg-grey-1 p-3 rounded-lg">
                  <p className="font-semibold text-sm">{comment.author}</p>
                  <p className="text-sm">{comment.text}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-text-grey">Комментариев пока нет.</p>
          )}
        </div>
        <div className="mt-4 pt-4 border-t border-grey-2">
          <div className="flex items-start gap-4">
            <img src="https://placehold.co/40x40/E2BAA4/000000?text=User" alt="User" className="w-10 h-10 rounded-full" />
            <div className="flex-grow">
              <textarea
                placeholder="Написать комментарий..."
                className="w-full p-2 border border-grey-2 rounded-lg focus:ring-main focus:border-main"
                rows="2"
              ></textarea>
              <div className="flex justify-end items-center mt-2">
                <Button variant="small-classic">Отправить</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeedPage = ({ onOpenModal }) => {
  const [commentModalOpen, setCommentModalOpen] = useState(false);
  const [activePost, setActivePost] = useState(null);

  const openComments = (post) => {
    setActivePost(post);
    setCommentModalOpen(true);
  };

  const closeComments = () => {
    setCommentModalOpen(false);
    setActivePost(null);
  };

  return (
    <div className="flex gap-6">
      <div className="flex-grow space-y-6">
        {/* Create Post */}
        <div className="bg-white rounded-2xl shadow-sm p-4">
          <div className="flex items-start gap-4">
            <img src="https://placehold.co/40x40/E2BAA4/000000?text=User" alt="User" className="w-10 h-10 rounded-full" />
            <div className="flex-grow">
              <textarea
                placeholder="Что нового?"
                className="w-full p-2 border-none focus:ring-0 resize-none"
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
          <div key={post.id} className="bg-white rounded-2xl shadow-sm">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full mr-3" />
                <div>
                  <h4 className="font-bold">{post.author.name}</h4>
                  <p className="text-sm text-text-grey">{post.views} просмотров</p>
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2">{post.title}</h3>
              <p className="text-text-grey mb-4">{post.description}</p>
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
            <div className="flex justify-around p-2 border-t border-grey-2">
              <Button variant="icon" className="flex items-center gap-2 text-text-grey hover:text-main">
                {React.createElement(ICONS.heart, { className: "w-5 h-5" })} {post.likes}
              </Button>
              <Button variant="icon" className="flex items-center gap-2 text-text-grey hover:text-main" onClick={() => openComments(post)}>
                {React.createElement(ICONS.messages, { className: "w-5 h-5" })} {post.commentsCount}
              </Button>
              <Button variant="icon" className="flex items-center gap-2 text-text-grey hover:text-main">
                {React.createElement(ICONS.repost, { className: "w-5 h-5" })} {post.reposts}
              </Button>
              <Button variant="icon" className="flex items-center gap-2 text-text-grey hover:text-main">
                {React.createElement(ICONS.eye, { className: "w-5 h-5" })}
              </Button>
            </div>
          </div>
        ))}
      </div>
      <FeedSidebar />
      {commentModalOpen && activePost && <CommentSection post={activePost} onClose={closeComments} />}
    </div>
  );
};

const HomePage = ({ onNavigate }) => {
  const [updatesModalOpen, setUpdatesModalOpen] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null);

  const openNews = (news) => {
    setSelectedNews(news);
    setUpdatesModalOpen(true);
  };

  const closeNews = () => {
    setUpdatesModalOpen(false);
    setSelectedNews(null);
  };

  const partners = [
    { name: 'Partner 1', logo: 'https://placehold.co/150x70/4F46E5/FFFFFF?text=Partner1' },
    { name: 'Partner 2', logo: 'https://placehold.co/150x70/3B82F6/FFFFFF?text=Partner2' },
    { name: 'Partner 3', logo: 'https://placehold.co/150x70/6D28D9/FFFFFF?text=Partner3' },
    { name: 'Partner 4', logo: 'https://placehold.co/150x70/D97706/FFFFFF?text=Partner4' },
  ];

  const startItems = [
    {
      title: 'Изучите основы',
      description: 'Ознакомьтесь с нашими руководствами и видеоуроками, чтобы быстро войти в курс дела.',
      image: 'https://placehold.co/200x150/FDBA74/000000?text=Learn'
    },
    {
      title: 'Создайте своего первого бота',
      description: 'Используйте наш интуитивно понятный конструктор для создания торгового алгоритма без кода.',
      image: 'https://placehold.co/200x150/FDBA74/000000?text=Create'
    },
    {
      title: 'Подключитесь к экспертам',
      description: 'Подпишитесь на сигналы от опытных трейдеров и автоматически копируйте их сделки.',
      image: 'https://placehold.co/200x150/FDBA74/000000?text=Connect'
    }
  ];

  const platformUpdates = newsUpdatesData.slice(0, 8);

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="relative bg-orange/10 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between overflow-hidden">
        <div className="relative z-10 text-left md:w-1/2">
            <h2 className="font-bold text-3xl md:text-4xl mb-4">Добро пожаловать в AlgoVerse!</h2>
            <p className="text-text-grey mb-6">Ваш командный центр для создания, управления и монетизации торговых алгоритмов.</p>
            <Button variant="small-classic">Начать</Button>
        </div>
        <div className="relative md:absolute bottom-0 right-0 md:w-1/2 h-64 md:h-auto mt-8 md:mt-0 flex items-end">
            <img src={`${process.env.PUBLIC_URL}/assets_task_01jye4eggtfk7ahzf9qf79dmxy_1750673668_img_3 1.svg`} alt="Welcome" className="w-full h-full object-contain object-bottom" />
        </div>
      </div>

      {/* Partners Section */}
      <section>
        <h3 className="font-bold text-2xl mb-4">Наши партнеры</h3>
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {partners.map((partner, index) => (
              <div key={index} className="flex justify-center items-center">
                <img src={partner.logo} alt={partner.name} className="max-h-12" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section "С чего начать" */}
      <section>
        <h3 className="font-bold text-2xl mb-4">С чего начать</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {startItems.map((item, index) => (
            <div key={index} className="bg-orange/20 rounded-2xl p-6 text-center">
              <img src={item.image} alt={item.title} className="w-full h-32 object-cover rounded-lg mb-4" />
              <h4 className="font-bold text-xl mb-2">{item.title}</h4>
              <p className="text-text-grey">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Investment Section */}
      <section>
        <h3 className="font-bold text-2xl mb-4">Инвестиции</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-sm p-6 flex items-center gap-6">
            <img src={`${process.env.PUBLIC_URL}/assets_task_01jye5x9b8faqtakmxk93mnj2t_1750675199_img_3 1.png`} alt="For Investors" className="w-32 h-32 object-cover" />
            <div>
              <h4 className="font-bold text-xl mb-2">Для инвесторов</h4>
              <p className="text-text-grey mb-4">Копируйте сделки, инвестируйте в лучших, получайте пассивный доход.</p>
              <Button variant="small-outline">Подробнее</Button>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-6 flex items-center gap-6">
            <img src={`${process.env.PUBLIC_URL}/assets_task_01jye63bnrfm2vt0y8at6hvj98_1750675399_img_1 1.png`} alt="For Creators" className="w-32 h-32 object-cover" />
            <div>
              <h4 className="font-bold text-xl mb-2">Для создателей</h4>
              <p className="text-text-grey mb-4">Создавайте, монетизируйте и продвигайте свои торговые стратегии.</p>
              <Button variant="small-outline">Подробнее</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Updates Section */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-2xl">Обновления платформы</h3>
          <Button variant="text" onClick={() => onNavigate('Помощь')}>Смотреть все</Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {platformUpdates.map((news) => (
            <div key={news.id} className="bg-white rounded-2xl shadow-sm overflow-hidden cursor-pointer" onClick={() => openNews(news)}>
              <img src={news.image} alt={news.title} className="w-full h-32 object-cover" />
              <div className="p-4">
                <p className="text-sm text-text-grey mb-1">{news.date}</p>
                <h4 className="font-bold leading-tight">{news.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {updatesModalOpen && selectedNews && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto relative">
            <Button variant="icon" className="absolute top-4 right-4" onClick={closeNews}>{React.createElement(ICONS.close)}</Button>
            <img src={selectedNews.image} alt={selectedNews.title} className="w-full h-64 object-cover rounded-lg mb-6" />
            <p className="text-sm text-text-grey mb-2">{selectedNews.date}</p>
            <h2 className="font-bold text-3xl mb-4">{selectedNews.title}</h2>
            <p className="text-text-grey">{selectedNews.content}</p>
          </div>
        </div>
      )}
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

  const LeaderboardCard = ({ profile, rank }) => {
    const rankClasses = {
      1: 'bg-yellow-400',
      2: 'bg-gray-300',
      3: 'bg-yellow-600',
      4: 'bg-blue-400',
      5: 'bg-indigo-400'
    };
    return (
      <div className="flex flex-col items-center text-center">
        <div className="relative">
          <img src={profile.avatar} alt={profile.name} className="w-24 h-24 rounded-full mx-auto mb-2 border-4 border-white shadow-lg" />
          <div className={`absolute -top-1 -right-1 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${rankClasses[rank] || 'bg-gray-400'}`}>
            {rank}
          </div>
        </div>
        <h4 className="font-bold mt-2">{profile.name}</h4>
        <p className="text-sm text-text-grey">{profile.specialization}</p>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      {/* Leaderboard Section - Центрирование и 5 колонок */}
      <section className="bg-white rounded-2xl shadow-sm p-6">
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
            <h2 className="font-bold text-2xl text-center mb-4">Лидеры Платформы</h2>
            <div className="flex justify-center border-b border-grey-2 mb-6">
              {tabs.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 font-semibold transition-colors ${activeTab === tab ? 'text-main border-b-2 border-main' : 'text-text-grey'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-4">
              {leaderboardData.map((person, index) => (
                <LeaderboardCard key={person.id} profile={person} rank={index + 1} />
              ))}
            </div>
        </div>
      </section>

      {/* Main Personas Grid */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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

  const handleNavigate = (target) => {
    if (['Лента', 'Маркетплейс', 'Персоны', 'Рабочий стол', 'Сообщения', 'Избранное', 'Помощь', 'Главная'].includes(target)) {
      setPage('app');
      setActivePage(target);
    } else {
      setPage(target);
    }
  };

  const handleLogout = () => {
    setPage('landing');
    setActivePage('Главная');
  };

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
      switch (activePage) {
        case 'Главная':
          ComponentToRender = <HomePage onNavigate={handleNavigate} />;
          break;
        case 'Лента':
          ComponentToRender = <FeedPage onOpenModal={() => setModalOpen(true)} />;
          break;
        case 'Маркетплейс':
          ComponentToRender = <Marketplace onNavigate={handleNavigate} botData={botData} botImages={botImages} />;
          break;
        case 'Персоны':
          ComponentToRender = <PersonsPage onNavigate={handleNavigate} />;
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
              // alert('Верификация пройдена!');
            }}
            onProductCreated={() => {
              // alert('Продукт создан!');
            }}
          />
        </div>
      );
    }
    return null;
  };

  return renderPage();
}

export default App;
'''