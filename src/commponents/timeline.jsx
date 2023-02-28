
import React from 'react';

import Scheduler, { Resource } from 'devextreme-react/scheduler';

import { data, resourcesData, priorityData } from './commponents/datat.js';

const currentDate = new Date(2021, 1, 2);
const views = ['timelineDay', 'timelineWeek', 'timelineWorkWeek', 'timelineMonth'];
const groups = ['priority'];

class App extends React.Component {
  render() {
    return (
      <Scheduler
        timeZone="America/Los_Angeles"
        dataSource={data}
        views={views}
        defaultCurrentView="timelineMonth"
        defaultCurrentDate={currentDate}
        height={580}
        groups={groups}
        cellDuration={60}
        firstDayOfWeek={0}
        startDayHour={8}
        endDayHour={20}>
        <Resource
          fieldExpr="ownerId"
          allowMultiple={true}
          dataSource={resourcesData}
          label="Owner"
          useColorAsDefault={ true }
        />
        <Resource
          fieldExpr="priority"
          allowMultiple={false}
          dataSource={priorityData}
          label="Priority"
        />
      </Scheduler>
    );
  }
}

export default App;



/*import React,{useState} from 'react'
import Timeline from 'react-calendar-timeline'
// make sure you include the timeline stylesheet or the timeline will not be styled
import 'react-calendar-timeline/lib/Timeline.css'
import moment from 'moment'
import '../App.css'





export const DTimeline = () => {
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
export default DTimeline*/
