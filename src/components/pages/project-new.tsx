import '../../App.css';
import Project_page from '../project_page';
import PCards from '../pp_cards';

export default function myProj() {
    return (
    <>
    <h1 className='project-new'>My Projects</h1>
    <Project_page />
    <PCards />
    </>
    );
}