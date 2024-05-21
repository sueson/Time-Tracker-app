const work = document.getElementById('work')
const play = document.getElementById('play')
const study = document.getElementById('study')
const excersice = document.getElementById('excersice')
const social = document.getElementById('social')
const selfCare = document.getElementById('selfcare')

const workCurrent = document.getElementById('work-current')
const workPrevious = document.getElementById('work-previous')
const playCurrent = document.getElementById('play-current')
const playPrevious = document.getElementById('play-previous')
const studyCurrent = document.getElementById('study-current')
const studyPrevious = document.getElementById('study-previous')
const excersiceCurrent = document.getElementById('excercise-current')
const excersicePrevious = document.getElementById('excercise-previous')
const socialCurrent = document.getElementById('social-current')
const socialPrevious = document.getElementById('social-previous')
const selfCurrent = document.getElementById('self-current')
const selfPrevious = document.getElementById('self-previous')

// created a function which uses to fetch json data...

let data;

function updateData(){
    fetch('data.json')
    .then(response => response.json())
    .then(value => {
        data = value;
        console.log(data)
        
        monthlyUpdate();
        weeklyUpdate();
        dailyUpdate();  //if monthlyUpdate was in last the data would apear at first when the page refreshes..
                        //and i kept monthlyUpdate at first, 
                        //so it will update dailData at first...
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}

//created functions which retrives the data and update based on periods..
function dailyUpdate(){
    
    data.forEach(activity => {
        const currentDailyValue = activity.timeframes.daily.current;
        const previousDailyValue = activity.timeframes.daily.previous;

        if(activity.title == 'Work'){
            workCurrent.innerHTML = currentDailyValue;
            workPrevious.innerHTML = previousDailyValue;
        }
        else if(activity.title == 'Play'){
            playCurrent.innerHTML = currentDailyValue;
            playPrevious.innerHTML = previousDailyValue;
        }
        else if(activity.title == 'Study'){
            studyCurrent.innerHTML = currentDailyValue;
            studyPrevious.innerHTML = previousDailyValue;
        }
        else if(activity.title == 'Exercise'){
            excersiceCurrent.innerHTML = currentDailyValue;
            excersicePrevious.innerHTML = previousDailyValue;
        }
        else if(activity.title == 'Social'){
            socialCurrent.innerHTML = currentDailyValue;
            selfPrevious.innerHTML = previousDailyValue;
        }
        else if(activity.title == 'Self Care'){
            selfCurrent.innerHTML = currentDailyValue;
            selfPrevious.innerHTML = previousDailyValue;
        }
        
    });
    
}

function weeklyUpdate(){
    
    data.forEach(activity => {
        const currentWeeklyValue = activity.timeframes.weekly.current;
        const previousWeeklyValue = activity.timeframes.weekly.previous;

        if(activity.title == 'Work'){
            workCurrent.innerHTML = currentWeeklyValue;
            workPrevious.innerHTML = previousWeeklyValue;
        }
        else if(activity.title == 'Play'){
            playCurrent.innerHTML = currentWeeklyValue;
            playPrevious.innerHTML = previousWeeklyValue;
        }
        else if(activity.title == 'Study'){
            studyCurrent.innerHTML = currentWeeklyValue;
            studyPrevious.innerHTML = previousWeeklyValue;
        }
        else if(activity.title == 'Exercise'){
            excersiceCurrent.innerHTML = currentWeeklyValue;
            excersicePrevious.innerHTML = previousWeeklyValue;
        }
        else if(activity.title == 'Social'){
            socialCurrent.innerHTML = currentWeeklyValue;
            selfPrevious.innerHTML = previousWeeklyValue;
        }
        else if(activity.title == 'Self Care'){
            selfCurrent.innerHTML = currentWeeklyValue;
            selfPrevious.innerHTML = previousWeeklyValue;
        }
        
    });
    
}

function monthlyUpdate(){
    
    data.forEach(activity => {
        const currentMonthlyValue = activity.timeframes.monthly.current;
        const previouMonthlyValue = activity.timeframes.monthly.previous;

        if(activity.title == 'Work'){
            workCurrent.innerHTML = currentMonthlyValue;
            workPrevious.innerHTML = previouMonthlyValue;
        }
        else if(activity.title == 'Play'){
            playCurrent.innerHTML = currentMonthlyValue;
            playPrevious.innerHTML = previouMonthlyValue;
        }
        else if(activity.title == 'Study'){
            studyCurrent.innerHTML = currentMonthlyValue
            studyPrevious.innerHTML = previouMonthlyValue;
        }
        else if(activity.title == 'Exercise'){
            excersiceCurrent.innerHTML = currentMonthlyValue;
            excersicePrevious.innerHTML = previouMonthlyValue;
        }
        else if(activity.title == 'Social'){
            socialCurrent.innerHTML = currentMonthlyValue;
            selfPrevious.innerHTML = previouMonthlyValue;
        }
        else if(activity.title == 'Self Care'){
            selfCurrent.innerHTML = currentMonthlyValue;
            selfPrevious.innerHTML = previouMonthlyValue;
        }
    });
   
}


updateData();














