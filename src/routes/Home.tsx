import AppSideBar from '@/components/app/app-sidebar';
import Content from '@/components/home/content';

const Home = () => {
    return (<>
        <div className='w-full h-full flex overflow-clip'>
            <AppSideBar></AppSideBar>

            <Content></Content>

        </div>
    </>);
}

export default Home;