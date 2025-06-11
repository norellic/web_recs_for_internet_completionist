import React from "react";
import Item_card from "./item_card";
import './Grid.css';

const Grid = () => {
    return (
        <div className="Grid">
            <Item_card 
                imglink="https://readpoopfiction.com/img/title3x.png" 
                websiteTitle="Poop Fiction" 
                color="brown" 
                description="so you don't have to keep reading the backs of those shampoo bottles" 
                link="https://readpoopfiction.com/"/>
            <Item_card
                imglink="https://www.themarginalian.org/wp-content/themes/themarginalian/images/the_marginalian_icon@2x.png?20250411" 
                websiteTitle="The Marginalian" 
                color="yellow" 
                description="for your daily dose of poetic inspiration"
                link="https://www.themarginalian.org/"/>
            <Item_card
                imglink="https://neal.fun/link-images/where-does-the-day-go.svg" 
                websiteTitle="Where Does the Day Go?" 
                color="light-blue" 
                description="because every five minutes is a precious five minutes" 
                link="https://neal.fun/where-does-the-day-go/"/>
            <Item_card
                imglink="https://line-of-action.com/img/loa-logo.png" 
                websiteTitle="Line of Action" 
                color="light-blue" 
                description="incase you get the urge to practice your gesture drawing skills" 
                link="https://line-of-action.com/"/>
            <Item_card
                imglink="https://prod-assets.futureme.org/assets/logo/logo-reverse@1x-056e77a61325f5f09d494ef19e0f2aab3ab1a50253c361e57169e3bd923053ed.svg" 
                websiteTitle="FutureMe" 
                color="brown" 
                description="when this is a moment in time worth remembering" 
                link="https://www.futureme.org/?utm_source=archive.internetisbeautiful.com&utm_medium=referral&utm_campaign=write-a-letter-to-the-future-you"/>
            <Item_card
                imglink="https://sleepopolis.com/wp-content/uploads/2018/09/SidebarMoon.png" 
                websiteTitle="Sleep Cycle Calculator" 
                color="yellow" 
                description="to find your perfect amount of zzz's(you'll probably still crash at 2am)" 
                link="https://sleepopolis.com/calculators/sleep/"/>
            <Item_card
                imglink="https://icons.iconarchive.com/icons/icons8/ios7/512/Music-Music-icon.png" 
                websiteTitle="Music Map" 
                color="yellow" 
                description="in hopes that you will expand your musical horizons" 
                link="https://www.music-map.com/"/>
            <Item_card
                imglink="https://www.decisionproblem.com/paperclips/title.png" 
                websiteTitle="Paperclips" 
                color="light-blue" 
                description="fakenomics." 
                link="https://www.decisionproblem.com/paperclips/"/>
            <Item_card
                imglink="https://www.freeiconspng.com/thumbs/global-icon/global-icon-13.png" 
                websiteTitle="Travle.earth" 
                color="brown" 
                description="let's see how well you ~really~ know your geography" 
                link="https://travle.earth/?travle-lang=en"/>
            <Item_card
                imglink="https://www.freeiconspng.com/thumbs/email-icon/email-icon--clipart-best-22.png" 
                websiteTitle="TempMail" 
                color="brown" 
                description="stay safe out there(and ahead of all that pesky spam)" 
                link="https://temp-mail.org/"/>
            <Item_card
                imglink="https://assetsio.gnwcdn.com/the-evolution-of-trust.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp" 
                websiteTitle="The Evolution of Trust" 
                color="yellow" 
                description="interactive prisoners dilemma" 
                link="https://ncase.me/trust/"/>
            <Item_card
                imglink="https://www.iconarchive.com/download/i106869/goodstuff-no-nonsense/free-space/moon-full-moon.1024.png" 
                websiteTitle="If the Moon Were One Pixel" 
                color="light-blue" 
                description="for when your freaking out on our speck of dust and need to remember the universe is BIG" 
                link="https://joshworth.com/dev/pixelspace/pixelspace_solarsystem.html"/>
        </div>
    )
}

export default Grid;