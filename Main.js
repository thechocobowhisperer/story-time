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
      console.log("Time: "+when);
      console.log("Description: "+desc);
      if(!this.events.hasOwnProperty(when)){
         console.log(this.events);
         this.events[when]={description:desc,tags:tags}
         return true;
      }
      console.log("Event already occurs at "+when);
      return false;
   }

   removeEntry(time){
      if(events.hasKey(time)){
         delete events[time];
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

function addEvent(){
   // get time entry
   var time = document.getElementById("time").value;
   // get event entry
   var entry = document.getElementById("eventDesc").value;
   // get entries div
   var entries = document.getElementById("events");
   
   //create new event from user input
   var event = new Event(time, entry);

   // Add structured row using event properties
   //TODO do not allow events with the same time to be added to events div
   //? Create event rows in events div from events dictionary 
   //? if so, an existence check isn't necessary due to the check in
   //? Story.addEntry()
   entries.innerHTML +='<div class="row"><div class="column">'+event.time+
   '</div><div class="column">'+event.description+'</div></div>';

   // add item to events dict when added to events div
   story.addEntry(event);
   console.log("title : "+story.title);
   console.log("length : "+story.length);
   
   // sort row elements by time

   // convert time?
}

//TODO sort items in events div by time
//TODO add color per tag
//TODO make story persistent
//TODO create an edit function to change time or description