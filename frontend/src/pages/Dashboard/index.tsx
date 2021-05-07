import Barchart from '../../components/barchart';
import Navbar from  '../../components/navbar';
import Donutchart from '../../components/donutchart';
import DataTable from '../../components/dataTable';
import Footer from '../../components/footer';

const Dashboard = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <h1 className="text-primary py-3">Dashboard</h1>

                <div className="row px-3">
                <div className="col-sm-6">
                    <h5 className="text-center text-secondary">Taxa de Sucesso (%)</h5>
                    <Barchart />
                </div>
                <div className="col-sm-6">
                    <h5 className="text-center text-secondary">Todas as Vendas</h5>
                    <Donutchart />
                </div>
                </div>

                <div className="py-3">
                <h2 className="text-primary">Todas Vendas</h2>
                </div>

                <DataTable />
            </div>
            <Footer />
        </>
    );
}

export default Dashboard;