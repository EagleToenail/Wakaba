// src/PieChart.js
import React from 'react';
import Chart from 'react-apexcharts';

const PieChart = ({value}) => {
  const chartOptions = {
    chart: {
      height: '100%',
      type: 'pie',
      zoom: {
        enabled: false,
      },
    },
    series: [70, 18, 12],
    labels: ['Direct', 'Organic search', 'Referral'],
    dataLabels: {
      style: {
        fontSize: '15px',
        fontFamily: 'Inter, ui-sans-serif',
        fontWeight: '400',
        colors: ['#fff', '#fff', '#1f2937'],
      },
      dropShadow: {
        enabled: false,
      },
      formatter: (value) => `${value.toFixed(1)} %`,
    },
    plotOptions: {
      pie: {
        dataLabels: {
          offset: -15,
        },
      },
    },
    legend: {
      show: false,
    },
    stroke: {
      width: 4,
    },
    grid: {
      padding: {
        top: -3,
        bottom: -3,
        left: -3,
        right: -3,
      },
    },
    tooltip: {
      enabled: false,
    },
    states: {
      hover: {
        filter: {
          type: 'none',
        },
      },
    },
  };

  return (
    <div className="p-4">
      <div className="h-[180px] w-[180px] flex flex-col justify-center items-center">
        <Chart
          options={chartOptions}
          series={chartOptions.series}
          type="pie"
          height="150"
        />
        {/* Legend Indicator */}
        {/* <div className="flex justify-center sm:justify-end items-center gap-x-4 mt-3 sm:mt-6">
          <div className="inline-flex items-center">
            <span className="size-2.5 inline-block bg-blue-600 rounded-sm me-2"></span>
            <span className="text-[13px] text-gray-600 dark:text-neutral-400">
              Income
            </span>
          </div>
          <div className="inline-flex items-center">
            <span className="size-2.5 inline-block bg-cyan-500 rounded-sm me-2"></span>
            <span className="text-[13px] text-gray-600 dark:text-neutral-400">
              Outcome
            </span>
          </div>
          <div className="inline-flex items-center">
            <span className="size-2.5 inline-block bg-gray-300 rounded-sm me-2 dark:bg-neutral-700"></span>
            <span className="text-[13px] text-gray-600 dark:text-neutral-400">
              Others
            </span>
          </div>
        </div> */}
        {/* End Legend Indicator */}
      </div>
      <div className='flex justify-center'>
        {value[0].title}
      </div>
    </div>
  );
};

export default PieChart;
