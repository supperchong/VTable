import * as VTable from '../../src';
import VChart from '@visactor/vchart';
const CONTAINER_ID = 'vTable';

export function createTable() {
  VTable.register.chartModule('vchart', VChart);
  const records = [
    {
      projectName: 'Project No.1',
      startTime: '2023/5/1',
      endTime: '2023/5/10',
      estimateDays: 10,
      goal: 0.6,
      progress: [
        {
          value: 0.5,
          label: '50%',
          goal: 0.6
        }
      ],
      master: 'Julin'
    },
    {
      projectName: 'Project No.2',
      startTime: '2023/5/1',
      endTime: '2023/5/5',
      estimateDays: 5,
      goal: 0.5,
      progress: [
        {
          value: 0.5,
          label: '50%',
          goal: 0.5
        }
      ],
      master: 'Jack'
    },
    {
      projectName: 'Project No.3',
      startTime: '2023/5/7',
      endTime: '2023/5/8',
      estimateDays: 3,
      goal: 0.2,
      progress: [
        {
          value: 0.3,
          label: '30%',
          goal: 0.2
        }
      ],
      master: 'Mary'
    },
    {
      projectName: 'Project No.4',
      startTime: '2023/5/11',
      endTime: '2023/5/12',
      estimateDays: 2,
      goal: 0.8,
      progress: [
        {
          value: 0.9,
          label: '90%',
          goal: 0.8
        }
      ],
      master: 'Porry'
    },
    {
      projectName: 'Project No.5',
      startTime: '2023/5/0',
      endTime: '2023/5/10',
      estimateDays: 2,
      goal: 1,
      progress: [
        {
          value: 0.8,
          label: '80%',
          goal: 1
        }
      ],
      master: 'Sheery'
    }
  ];
  const columns = [
    {
      field: 'projectName',
      title: 'Project Name',
      width: 'auto',
      style: {
        color: '#ff689d',
        fontWeight: 'bold'
      }
    },
    {
      field: 'progress',
      title: 'Schedule',
      width: 300,
      cellType: 'chart',
      chartModule: 'vchart',
      style: {
        padding: 1
      },
      chartSpec: {
        type: 'linearProgress',
        progress: {
          style: {
            fill: '#32a645',
            lineCap: ''
          }
        },
        data: {
          id: 'id0'
        },
        direction: 'horizontal',
        xField: 'value',
        yField: 'label',
        seriesField: 'type',
        height: 150,
        cornerRadius: 20,
        bandWidth: 12,
        axes: [
          {
            orient: 'right',
            type: 'band',
            domainLine: { visible: false },
            tick: { visible: false },
            label: {
              formatMethod: val => val,
              style: {
                fontSize: 14,
                fontWeight: 'bold',
                fill: '#32a645'
              }
            },
            maxWidth: '60%' // 配置坐标轴的最大空间
          },
          {
            orient: 'bottom',
            label: { visible: true, inside: true },
            type: 'linear',
            visible: false,
            grid: {
              visible: false
            }
          }
        ],
        extensionMark: [
          {
            type: 'rule',
            dataId: 'id0',
            visible: true,
            style: {
              x: (datum, ctx, elements, dataView) => {
                return ctx.valueToX([datum.goal]);
              },
              y: (datum, ctx, elements, dataView) => {
                return ctx.valueToY([datum.label]) - 5;
              },
              x1: (datum, ctx, elements, dataView) => {
                return ctx.valueToX([datum.goal]);
              },
              y1: (datum, ctx, elements, dataView) => {
                return ctx.valueToY([datum.label]) + 5;
              },
              stroke: 'red',
              lineWidth: 2
            }
          },
          {
            type: 'symbol',
            dataId: 'id0',
            visible: true,
            style: {
              symbolType: 'triangleDown',
              x: (datum, ctx, elements, dataView) => {
                return ctx.valueToX([datum.goal]);
              },
              y: (datum, ctx, elements, dataView) => {
                return ctx.valueToY([datum.label]) - 10;
              },
              size: 15,
              scaleY: 0.5,
              fill: 'red'
            }
          }
        ]
      }
    },
    {
      field: 'goal',
      title: 'Target',
      width: 'auto',
      fieldFormat(rec) {
        return rec.goal * 100 + '%';
      },
      style: {
        color: 'red',
        fontWeight: 'bold'
      }
    },
    {
      field: 'startTime',
      title: 'Start Time',
      width: 'auto'
    },
    {
      field: 'endTime',
      title: 'End Time',
      width: 'auto'
    },
    {
      field: 'master',
      title: 'Master',
      width: 'auto',
      style: {
        color: 'purple',
        fontWeight: 'bold'
      }
    }
  ];

  const option = {
    records,
    columns,
    widthMode: 'standard',
    hover: {
      highlightMode: 'cross'
    },
    defaultRowHeight: 60,
    autoFillWidth: true,
    frozenColCount: 2
  };
  const tableInstance = new VTable.ListTable(document.getElementById(CONTAINER_ID), option);

  window.tableInstance = tableInstance;
  tableInstance.on('change_cell_value', arg => {
    console.log(arg);
  });
  // tableInstance.on('sort_click', args => {
  //   tableInstance.updateSortState(
  //     {
  //       field: args.field,
  //       order: Date.now() % 3 === 0 ? 'desc' : Date.now() % 3 === 1 ? 'asc' : 'normal'
  //     },
  //     false
  //   );
  //   return false; //return false代表不执行内部排序逻辑
  // });
}
