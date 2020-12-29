class Story {
   events = {}
   
   constructor(title, length){
      this.title = title;
      this.length = length;
   }

   addEntry(event){
      var when = event.time;
      var desc = event.description;
      var tags = event.tags;
      // console.log("Time: "+when);
      // console.log("Description: "+desc);
      if(!this.events.hasOwnProperty(when)){
         // console.log(this.events);
         this.events[when]={description:desc,tags:tags}
         return true;
      }
      console.log("Event already occurs at "+when);
      return false;
   }

   removeEntry(){
      var eventTime = document.getElementById("time").value;
      if(this.events.hasOwnProperty(eventTime)){
         delete this.events[eventTime];
         populateEntries();
         return true;
      }
      return false;
   }
}

class Event {
   constructor(time, description){
      this.description = description;
      this.time = time;
      this.tags = [];
   }
   
   //  Add tag to event's tags array if 
   //  tag not already in tags array
   
   addTag(tag){
      if(!this.tags.includes(tag)){
         this.tags.push(tag);
         return true;
      }
      return false;
   }
}
var story;
function addStory(){
   //get story info
   var storyName = document.getElementById("storyName").value;
   var storyLength = document.getElementById("storyLength").value;
   story = new Story(storyName, storyLength);
}

function populateEntries(){
   // get entries div
   var entries = document.getElementById("events");
   
   // Add structured row using event properties
   // do not allow events with the same time to be added to events div

   entries.innerHTML ='<div class="events" id="events">'+
   '<div class="row">'+'<div class="column">Time</div>'+
   '<div class="column">Description</div>'+
   '</div>'+'</div>';
   var keysList = Object.keys(story.events);
   keysList.forEach((x)=>{
      // console.log(story.events[x].description)
      entries.innerHTML +='<div class="row"><div class="column">'+x+
      '</div><div class="column">'+story.events[x].description+'</div></div>';
   });
   
   
   // add item to events dict when added to events div
   
   // sort row elements by time
   
   // convert time?
}

function addToDict(){
   // get time entry
   var time = document.getElementById("time").value;
   // get event entry
   var entry = document.getElementById("eventDesc").value;
   
   //create new event from user input
   var event = new Event(time, entry);
   story.addEntry(event);
   // console.log("title : "+story.title);
   // console.log("length : "+story.length);
   populateEntries();
}

//TODO create an edit function to change time or description
function editEvent(){
   
}
//TODO add color per tag
//TODO make story persistent