// data.js
export const employees = [
  {
    text: 'John Doe',
    id: 1,
    color: '#cb6bb2',
  },
  {
    text: 'Jane Smith',
    id: 2,
    color: '#56ca85',
  },
  {
    text: 'Bob Johnson',
    id: 3,
    color: '#1e90ff',
  },
];

export const data = [
  {
    text: 'Meeting with John',
    startDate: new Date(2023, 2, 1, 9, 0),
    endDate: new Date(2023, 2, 1, 10, 0),
    employeeId: 1,
    id: 1,
  },
  {
    text: 'Lunch with Jane',
    startDate: new Date(2023, 2, 1, 12, 0),
    endDate: new Date(2023, 2, 1, 13, 0),
    employeeId: 2,
    id: 2,
  },
  {
    text: 'Meeting with Bob',
    startDate: new Date(2023, 2, 2, 14, 0),
    endDate: new Date(2023, 2, 2, 15, 0),
    employeeId: 3,
    id: 3,
  },
];

/*import * as React from 'react';
import Paper from '@mui/material/Paper';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  Resources,
  MonthView,
  Appointments,
  AppointmentTooltip,
  AppointmentForm,
  EditRecurrenceMenu,
  DragDropProvider,
} from '@devexpress/dx-react-scheduler-material-ui';
import { owners } from './demo-data/tasks';
import { appointments, resourcesData } from './demo-data/resources';

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: appointments,
      resources: [
        {
          fieldName: 'roomId',
          title: 'Room',
          instances: resourcesData,
        },
        {
          fieldName: 'members',
          title: 'Members',
          instances: owners,
          allowMultiple: true,
        },
      ],
    };

    this.commitChanges = this.commitChanges.bind(this);
  }

  commitChanges({ added, changed, deleted }) {
    this.setState((state) => {
      let { data } = state;
      if (added) {
        const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [...data, { id: startingAddedId, ...added }];
      }
      if (changed) {
        data = data.map(appointment => (
          changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
      }
      if (deleted !== undefined) {
        data = data.filter(appointment => appointment.id !== deleted);
      }
      return { data };
    });
  }

  render() {
    const { data, resources } = this.state;

    return (
      <Paper style={{marginTop:"5rem"}}>
        <Scheduler
          data={data}
        >
          <ViewState
            defaultCurrentDate="2017-05-25"
          />
          <EditingState
            onCommitChanges={this.commitChanges}
          />
          <EditRecurrenceMenu />
     

          <MonthView />
          <Appointments />
          <AppointmentTooltip
            showOpenButton
          />
          <AppointmentForm />

          <Resources
            data={resources}
            mainResourceName="roomId"
          />
          <DragDropProvider />
        </Scheduler>
      </Paper>
    );
  }
}
import React from 'react'
import { Inject,ScheduleComponent ,Day,Week,WorkWeek,Month,Agenda , EventSettingsModel} from '@syncfusion/ej2-react-schedule'
import { DataManager,WebApiAdaptor } from '@syncfusion/ej2-data';


const App = () => {
  const localData = {
    dataSource: [{
      EndTime: new Date(2022, 0, 11, 6, 30),
      StartTime: new Date(2022, 0, 11, 4, 0)
    }]
  };
  const remoteData = new DataManager({
    url: 'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData', 
    adaptor: new WebApiAdaptor, 
    crossDomain: true 
  });
  console.log(remoteData)
  const group = {
    enableCompactView: false,
    resources: [{
      field: 'OwnerId',
      name: 'Users',
      dataSource: [
        { text: 'Alice', id: 1, color: '#1aaa55' },
        { text: 'Bob', id: 2, color: '#7fa900' },
        { text: 'Charlie', id: 3, color: '#ea7a57' }
      ],
      textField: 'text',
      idField: 'id',
      colorField: 'color'
    }, {
      field: 'StartTime',
      name: 'Time',
      allowMultiple: false,
      dataSource: [
        { text: '12:00 AM', id: 0 },
        { text: '1:00 AM', id: 1 },
        { text: '2:00 AM', id: 2 },
        /* add more time slots as needed 
      ],
      textField: 'text',
      idField: 'id',
      enableAdaptiveRows: true
    }]
  };


  return (
    <div style={{marginTop:'5rem'}}>

     <ScheduleComponent currentView='Month'
      eventSettings={{ dataSource:remoteData ,group: group }} selectedDate={new Date(2022, 5, 5)} > 
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent> 
    </div>
  )
}

export default App */
/*
import React,{useState} from 'react'
import Timeline from 'react-calendar-timeline'
// make sure you include the timeline stylesheet or the timeline will not be styled
import 'react-calendar-timeline/lib/Timeline.css'
import moment from 'moment'
import './App.css'





export const App = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      group: 1,
      title: 'item 1',
      start_time: moment(),
      end_time: moment().add(1, 'hour'),
      canMove: true,
      canResize: false,
      canChangeGroup: false,
      itemProps: {
        // these optional attributes are passed to the root <div /> of each item as <div {...itemProps} />
        'data-custom-attribute': 'Random content',
        'aria-hidden': true,
        onDoubleClick: () => { console.log('You clicked double!') },
        className: 'weekend',
        style: {
          background: 'fuchsia'
        }
      }
    
  
    },
    {
      id: 2,
      group: 2,
      title: 'item 2',
      start_time: moment().add(-0.5, 'hour'),
      end_time: moment().add(0.5, 'hour'),
      canMove: true,
    canResize: false,
    canChangeGroup: false,
    itemProps: {
      // these optional attributes are passed to the root <div /> of each item as <div {...itemProps} />
      'data-custom-attribute': 'Random content',
      'aria-hidden': true,
      onDoubleClick: () => { console.log('You clicked double!') },
      className: 'weekend',
      style: {
        background: 'fuchsia'
      }
    }
    
  
  
    },
    {
      id: 3,
      group: 1,
      title: 'item 3',
      start_time: moment().add(2, 'hour'),
      description:"this is jsut a test not big deal",    
      end_time: moment().add(3, 'hour'),
      canMove: true,
      canResize: false,
      canChangeGroup: false,
      itemProps: {
        // these optional attributes are passed to the root <div /> of each item as <div {...itemProps} />
        'data-custom-attribute': 'Random content',
        'aria-hidden': true,
        onDoubleClick: () => { console.log('You clicked double!') },
        className: 'weekend',
        style: {
          background: 'fuchsia'
        }
      }
    }
  ])

  const groups = [{ id: 1, title: 'group 1' ,}, { id: 2, title: 'group 2' },{ id: 3, title: 'group 1' ,}, { id: 4, title: 'group 2' },{ id: 5, title: 'group 1' ,}, { id: 6, title: 'group 2' }]


const handleItemMove = (itemId, dragTime, newGroupOrder) => {
  console.log(itemId)
  console.log(newGroupOrder)
  const newItems = items.map((item) => {
    if (item.id === itemId) {
      return {
        ...item,
        end_time: dragTime,
        group: groups[newGroupOrder].id,
      };
    } else {
      return item;
    }
  });
  setItems(newItems);
};
const getCurrentDayBounds = () => {
  const start = moment().startOf("day");
  const end = moment().endOf("day");
  return { start, end };
};


  return (
    <div className='myTable'>
    <Timeline
      groups={groups}
      items={items}
      defaultTimeStart={getCurrentDayBounds().start}
      defaultTimeEnd={getCurrentDayBounds().end}
      onItemMove={handleItemMove}
      headerLabelFormats={{
        day: "ddd D/M",
        hour: "HH:mm",
      }}
      className="my-timeline"

   


    />


    </div>
  )
}
export default App
*/
/*
import React from 'react'
import {
  ViewState,
  GroupingState,
  IntegratedGrouping,
  Scheduler,
  WeekView,
  Appointments,
  AppointmentTooltip,
  AppointmentForm,
  GroupingPanel,
} from '@devexpress/dx-react-scheduler';
import {
  MuiThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import { withStyles } from '@material-ui/core/styles';

const App = ({ classes }) =>  {
  const schedulerData = [
    {
      id: 1,
      startDate: '2022-03-01T09:00',
      endDate: '2022-03-01T10:30',
      title: 'Meeting',
      location: 'Room 101',
      attendees: ['John Doe', 'Jane Doe'],
    },
    {
      id: 2,
      startDate: '2022-03-01T11:00',
      endDate: '2022-03-01T12:30',
      title: 'Presentation',
      location: 'Room 202',
      attendees: ['Bob Smith', 'Alice Smith'],
    },
  ];
  
  const grouping = [{ resourceName: 'location' }];
  
  const styles = theme => ({
    tooltipContent: {
      padding: theme.spacing.unit * 2,
      backgroundColor: blue[700],
      color: theme.palette.common.white,
    },
    tooltipText: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    tooltipTitle: {
      fontWeight: 'bold',
      marginRight: theme.spacing.unit,
    },
    tooltipLocation: {
      fontStyle: 'italic',
    },
  });
  
  const theme = createMuiTheme({
    palette: {
      type: 'light',
      primary: blue,
    },
  });
  
  return (
    <div>
        <MuiThemeProvider theme={theme}>
    <Scheduler data={schedulerData}>
      <ViewState currentDate="2022-03-01" />
      <GroupingState grouping={grouping} />
      <IntegratedGrouping />
      <WeekView
        startDayHour={9}
        endDayHour={18}
        cellDuration={60}
        timeTableCellComponent={({ children, ...restProps }) => (
          <WeekView.TimeTableCell {...restProps}>
            <div style={{ height: '100%' }}>{children}</div>
          </WeekView.TimeTableCell>
        )}
      />
      <Appointments />
      <AppointmentTooltip
        contentComponent={({ appointmentData, ...restProps }) => (
          <div className={classes.tooltipContent}>
            <div className={classes.tooltipText}>
              <div className={classes.tooltipTitle}>{appointmentData.title}</div>
              <div>{appointmentData.startDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}-{appointmentData.endDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
            </div>
            <div className={classes.tooltipLocation}>{appointmentData.location}</div>
            <div>{appointmentData.attendees.join(', ')}</div>
          </div>
        )}
      />
      <AppointmentForm />
      <Grouping />
      <GroupingPanel />
   </Scheduler>
 </MuiThemeProvider>




    </div>
  )
}

export default App */

