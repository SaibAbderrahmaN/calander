

import React from 'react';

import Scheduler, { Resource, View, Scrolling } from 'devextreme-react/scheduler';
import {
  resources,
  generateAppointments,
} from './data.js';


const currentDate = new Date(2021, 1, 2);

const groups = ['humanId'];

const startDay = new Date(2021, 1, 1);
const endDay = new Date(2021, 1, 28);
const startDayHour = 8;
const endDayHour = 20;

const appointments = generateAppointments(startDay, endDay, startDayHour, endDayHour);
function ResourceTemplate(props) {
  return (
    <div>
      <img src={props.data.avatar} alt="Avatar" />
      <span>{props.data.text}</span>
      <span>{props.data.status}</span>
    </div>
  );
}

function DScheduler() {
  return (
    <Scheduler
     timeZone="france/paris"

      dataSource={appointments}
      height={600}
      defaultCurrentView='Timeline'
      defaultCurrentDate={currentDate}
      startDayHour={startDayHour}
      endDayHour={endDayHour}
      cellDuration={60}
      showAllDayPanel={false}
      groups={groups}>
      <View
        type='timelineWorkWeek'
        name='Timeline'
        groupOrientation='vertical'
      />
      <View
        type='workWeek'
        groupOrientation='vertical'
      />
      <View
        type='month'
        groupOrientation='horizontal'
      />
      <Resource
        fieldExpr='humanId'
        dataSource={resources}
        label='drivers'
        resourceRender={ResourceTemplate}
      />
    
      <Scrolling
        mode='virtual'
      />
    </Scheduler>
  );
}

export default DScheduler;
















/*import React from 'react'
import { ScheduleComponent, Inject, TimelineViews,Agenda, Day, Month, Week, WorkWeek, EventSettingsModel ,Print} from '@syncfusion/ej2-react-schedule';
import { DataManager,WebApiAdaptor } from '@syncfusion/ej2-data';
import moment from 'moment'



const Scheduler = () => {
  const localData = {
    dataSource: [{
      EndTime: moment().startOf("day"),
      StartTime: moment().endOf("day")
    }]
  };
  const remoteData = new DataManager();
  return (
    <ScheduleComponent 

    
    currentView='day'
      eventSettings={{ dataSource: [
        {
          Id: 1,
          Subject: "Meeting with John",
          StartTime: new Date(2023, 2, 28, 10, 0),
          EndTime: new Date(2023, 2, 28, 11, 0),
          IsAllDay: false
        },
        {
          Id: 2,
          Subject: "Lunch with Mary",
          StartTime: new Date(2023, 2, 28, 12, 0),
          EndTime: new Date(2023, 2, 28, 13, 0),
          IsAllDay: false
        }
      ]  }} selectedDate={moment().startOf("day")} > 
      <Inject services={[Day,TimelineViews]} />
    </ScheduleComponent>  

  )
}

export default Scheduler */