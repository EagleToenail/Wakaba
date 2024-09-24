import React from 'react';
import Chart from 'react-apexcharts';

const LineChart = ({title,subtitle1,subtitle2}) => {
  const series = [
    {
      name: subtitle1,
      data: [0, 27000, 25000, 27000, 40000, 30000, 26000, 34000, 2600, 35000, 38000, 21000, 26000],
    },
    {
      name: subtitle2,
      data: [19500, 10000, 19000, 17500, 26000,0, 27000, 25000, 27000, 40000, 30000, 26000,27000,],
    },
    // {
    //   name: 'Others',
    //   data: [8000, 2200, 6000, 9000, 10000],
    // },
  ];

  const options = {
    chart: {
      height: 250,
      type: 'line',
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    stroke: {
      curve: 'straight',
      width: [4, 4, 4],
      dashArray: [0, 0, 4],
    },
    grid: {
      borderColor: '#e5e7eb',
    },
    xaxis: {
      categories: [
        '2023年4月 ',
        '2023年5月 ',
        '2023年6月 ',
        '2023年7月 ',
        '2023年8月 ',
        '2023年9月 ',
        '2023年10月 ',
        '2023年11月 ',
        '2023年12月 ',
        '2024年1月 ',
        '2024年2月 ',
        '2024年3月 ',
        '2024年4月 ',
        // '3 February 2023',
      ],
      labels: {
        style: {
          colors: '#9ca3af',
          fontSize: '13px',
          fontFamily: 'Inter, ui-sans-serif',
          fontWeight: 400,
        },
        formatter: (val) => {
          // Check if val is a string
          if (typeof val !== 'string') return ''; 
          const [date, month] = val.split(' ');
          return `${date} ${month.slice(0, 3)}`;
        },
      },
    },
    yaxis: {
      min: 0,
      max: 40000,
      labels: {
        style: {
          colors: '#9ca3af',
          fontSize: '12px',
          fontFamily: 'Inter, ui-sans-serif',
          fontWeight: 400,
        },
        formatter: (value) => (value >= 1000 ? `${value / 1000}k` : value),
      },
    },
    tooltip: {
      x: {
        formatter: (val) => {
          // Check if val is a string
          if (typeof val !== 'string') return ''; 
          const [date, month] = val.split(' ');
          return `${date} ${month}`;
        },
      },
    },
    colors: ['#2563EB', '#22d3ee', '#d1d5db'],
  };

  return (
    <div style={{width:'30%'}} className='border border-[#70685a]'>
      {/* Legend Indicator */}
      {/* <div className="flex justify-center sm:justify-end items-center gap-x-4 mb-3 sm:mb-6">
        <div className="inline-flex items-center">
          <span className="size-2.5 inline-block bg-blue-600 rounded-sm me-2"></span>
          <span className="text-[13px] text-gray-600 dark:text-neutral-400">Income</span>
        </div>
        <div className="inline-flex items-center">
          <span className="size-2.5 inline-block bg-cyan-500 rounded-sm me-2"></span>
          <span className="text-[13px] text-gray-600 dark:text-neutral-400">Outcome</span>
        </div>
        <div className="inline-flex items-center">
          <span className="size-2.5 inline-block bg-gray-300 rounded-sm me-2 dark:bg-neutral-700"></span>
          <span className="text-[13px] text-gray-600 dark:text-neutral-400">Others</span>
        </div>
      </div> */}
      {/* Apex Lines Chart */}
      <div className='text-center text-xl'>
        {title}
      </div>
      <Chart options={options} series={series} type="line" height={250} />
    </div>
  );
};

export default LineChart;
