import { observer } from 'mobx-react'
import * as React from 'react'
// import classnames from 'classnames'
import styles from './PieChart.module.css'
import * as Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { windowStore } from '../stores/windowStore'

interface IPieChartProps {

}

@observer
export class PieChart extends React.Component<IPieChartProps> {
  chart = React.createRef<any>()

  render () {

    const chartOptions: any = {
      chart: {
        backgroundColor: 'transparent',
        height: `${windowStore.height * 0.33}px`,
        plotBackgroundColor: 'transparent',
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        style: {
          fontFamily: 'Nunito'
        }
      },
      colors: ['#24ccb8', '#ff5660', '#ffc400'],
      title: {
        text: ''
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          borderWidth: 0,
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
              enabled: true,
              distance: 10,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %',
              style: {
                color: '#fff',
                textOutline: 'none'
              }
          }
      }
      },
      series: [{
        name: 'Brands',
        data: [{
          name: 'Chrome',
          y: 61.41,
          sliced: true,
          selected: true
        }, {
          name: 'Internet Explorer',
          y: 13.84
        }, {
          name: 'Firefox',
          y: 8.85
        }]
      }]
    }

    return (
      <div className={styles.container}>
        <HighchartsReact
          highcharts={Highcharts}
          options={chartOptions}
          ref={this.chart}
        />
      </div>
    )
  }
}
