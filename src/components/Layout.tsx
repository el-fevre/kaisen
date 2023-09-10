import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Board from '../components/Board';

export default function Layout() {
  return (
    <div>
      <Nav/>
      <Sidebar />
      <Board />
      <Footer />
    </div>
  );
}
