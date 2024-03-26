import PropTypes from 'prop-types';
import ReactApexChart from "react-apexcharts";

PokeCharts.propTypes = {
    stats: PropTypes.array
};

function PokeCharts({ stats: series }) {

    let options = {
        yaxis: {
            show: false,
        },
        dataLabels: {
            enabled: true,
            background: {
                enabled: true,
                borderRadius: 2,
            }
        },
        labels: ['HP', 'Ataque', 'Defesa', 'Ataque Especial', 'Defesa Especial', 'Velocidade'],
        plotOptions: {
            radar: {
                polygons: {
                    strokeColor: '#e8e8e8',
                    fill: {
                        colors: ['#f8f8f8', '#fff']
                    }
                }
            }
        }
    }

    return (
        series ? (
            <div id="chart">
                <ReactApexChart
                    options={options}
                    series={series}
                    type="radar"
                    height={250}
                    width={300}
                />
            </div>
        ) : null
    )
}

export default PokeCharts;