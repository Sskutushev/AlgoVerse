



import React, { useState } from 'react';
import { Button, ICONS } from '../App'; // Assuming these are exported from App.js
import AlgoBotCreationForm from '../components/AlgoBotCreationForm';

const DraftNotification = () => (
    <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-lg mb-6">
        <div className="flex">
            <div className="py-1"><img src={`${process.env.PUBLIC_URL}/-------------------------------------------------- (1) 3.svg`} alt="" className="w-12 h-12 mr-4"/></div>
            <div>
                <p className="font-bold">Ваш продукт — черновик.</p>
                <p className="text-sm">Вы можете свободно редактировать данные во всех вкладках. Не забывайте сохранять изменения. Заполните всю информацию, загрузите файл на вкладке "Версии" и дождитесь окончания автоматической проверки. После этого нажмите "Опубликовать".</p>
            </div>
        </div>
    </div>
);


const ScammerWarning = () => (
    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg mb-6">
        <div className="flex">
            <div className="py-1"><img src={`${process.env.PUBLIC_URL}/warning 1.svg`} alt="" className="w-12 h-12 mr-4"/></div>
            <div>
                <p className="font-bold">Осторожно — мошенники!</p>
                <p className="text-sm">Не доверяйте сомнительным предложениям продать продукт по завышенной цене за комиссию или накрутить статистику аккаунта. Так злоумышленники пытаются с вашей помощью отмывать и обналичивать средства неясного происхождения. Не соглашайтесь участвовать в подобных схемах, это приведет к потере денег и блокировке аккаунта.</p>
            </div>
        </div>
    </div>
);




const ProgressSidebar = () => {
    const [steps, setSteps] = useState([
        { name: 'Регистрация и права продавца', completed: true },
        { name: 'Общая информация и логотип', completed: false },
        { name: 'Описание и скриншоты', completed: false },
        { name: 'Версии и обновления', completed: false },
    ]);

    const allStepsCompleted = steps.every(step => step.completed);

    return (
        <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24">
            <h3 className="font-bold text-xl mb-4">Готовность продукта</h3>
            <ul className="space-y-3 mb-6">
                {steps.map(step => (
                    <li key={step.name} className="flex items-center">
                        {step.completed ? 
                            <ICONS.check className="w-6 h-6 text-green-500 mr-3" /> : 
                            <div className="w-6 h-6 border-2 border-grey-2 rounded-md mr-3"></div>
                        }
                        <span className={step.completed ? 'text-text-black' : 'text-text-grey'}>{step.name}</span>
                    </li>
                ))}
            </ul>
            <div className="relative group">
                <Button 
                    variant="big-classic" 
                    className={`w-full ${!allStepsCompleted ? '!bg-grey-2 !text-text-grey cursor-pointer' : ''}`}
                    onClick={() => allStepsCompleted ? alert('Опубликовано!') : null}
                >
                    Опубликовать
                </Button>
                {!allStepsCompleted && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-3 py-2 bg-gray-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        Для публикации необходимо полностью заполнить все разделы.
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-gray-800"></div>
                    </div>
                )}
            </div>
        </div>
    );
};



const GeneralTab = ({ productData }) => (
    <div>
        <h3 className="font-bold text-xl mb-4">Загрузка логотипа</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="flex flex-col items-center justify-center text-center p-6 border-2 border-dashed rounded-lg h-40 cursor-pointer hover:bg-grey-2/30">
                <ICONS.upload className="w-10 h-10 text-grey mb-2" />
                <span className="text-text-grey text-sm">Для карточки</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-6 border-2 border-dashed rounded-lg h-40 cursor-pointer hover:bg-grey-2/30">
                <ICONS.upload className="w-10 h-10 text-grey mb-2" />
                <span className="text-text-grey text-sm">Для витрины</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-6 border-2 border-dashed rounded-lg h-40 cursor-pointer hover:bg-grey-2/30">
                <ICONS.upload className="w-10 h-10 text-grey mb-2" />
                <span className="text-text-grey text-sm">Для платформы</span>
            </div>
        </div>
        <AlgoBotCreationForm initialData={productData} onSave={() => {alert('Изменения сохранены')}} showTerms={false} showActions={false} />
    </div>
);

const DescriptionTab = () => (
    <div>
        <h3 className="font-bold text-xl mb-4">Описание и инструкция</h3>
        {/* Placeholder for rich text editor */}
        <textarea className="w-full p-3 border rounded-lg h-48 mb-6" placeholder="Введите описание..."></textarea>
        
        <h3 className="font-bold text-xl mb-4">Скриншоты</h3>
        <div className="bg-grey-1 p-4 rounded-lg mb-4">
            <p className="font-semibold">Требования к изображениям:</p>
            <ul className="list-disc list-inside text-sm text-text-grey">
                <li>Максимальный размер: 1920x1080 пикселей.</li>
                <li>Минимальный размер: 720 пикселей по одной из сторон.</li>
                <li>Максимальный вес файла: 2 Мб.</li>
                <li>Формат: GIF, PNG, JPG, JPEG.</li>
                <li>Максимальное количество: 12 штук.</li>
            </ul>
        </div>
        <div className="border-2 border-dashed rounded-lg p-12 flex flex-col items-center justify-center cursor-pointer hover:bg-grey-2/30">
            <ICONS.upload className="w-12 h-12 text-grey mb-2" />
            <p className="text-text-grey">Перетащите файлы сюда или нажмите для выбора</p>
        </div>
    </div>
);

const VersionsTab = () => (
    <div>
        <h3 className="font-bold text-xl mb-4">Загрузка версий</h3>
        <div className="bg-grey-1 p-4 rounded-lg mb-4">
            <p className="font-semibold">Требования к файлу:</p>
            <ul className="list-disc list-inside text-sm text-text-grey">
                <li>Продукт должен содержать только один EX5 файл.</li>
                <li>Название файла и входных параметров должны быть на латинице.</li>
                <li>Запрещены вызовы DLL из соображений безопасности.</li>
                <li>Запрещены любые ограничения на работу продукта (по времени, счету, инструменту и т.д.).</li>
                <li>Все продукты проходят проверку на вредоносные действия.</li>
            </ul>
        </div>
        <p className="text-text-grey mb-4">Ваш продукт не содержит ни одной версии. Пожалуйста прикрепите файл продукта.</p>
        <Button variant="big-classic">Добавить файл</Button>
    </div>
);

const ProductDraftPage = ({ productData }) => {
    const [activeTab, setActiveTab] = useState('Общая');
    const tabs = ['Общая', 'Описание', 'Версии'];

    const renderTabContent = () => {
        switch (activeTab) {
            case 'Общая': return <GeneralTab productData={productData} />;
            case 'Описание': return <DescriptionTab />;
            case 'Версии': return <VersionsTab />;
            default: return null;
        }
    };

    return (
        <div className="space-y-6">
            <DraftNotification />
            <ScammerWarning />
            <div className="flex flex-col lg:flex-row gap-6">
                <div className="w-full lg:w-2/3">
                    <div className="bg-white rounded-2xl shadow-sm">
                        <div className="border-b border-grey-2 flex">
                            {tabs.map(tab => (
                                <button key={tab} onClick={() => setActiveTab(tab)} className={`px-6 py-3 font-semibold transition-colors ${activeTab === tab ? 'text-main border-b-2 border-main' : 'text-text-grey hover:bg-grey-2/30'}`}>
                                    {tab}
                                </button>
                            ))}
                        </div>
                        <div className="p-6">
                            {renderTabContent()}
                        </div>
                    </div>
                    <div className="mt-6 flex justify-end">
                        <Button variant="big-classic">Сохранить</Button>
                    </div>
                </div>
                <aside className="w-full lg:w-1/3 flex-shrink-0">
                    <ProgressSidebar />
                </aside>
            </div>
        </div>
    );
};


export default ProductDraftPage;
