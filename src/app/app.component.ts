import { Component, OnInit } from '@angular/core';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // animations: [
  //   trigger('listStagger', [
  //     transition('* <=> *', [
  //       query(
  //         ':enter',
  //         [
  //           style({opacity: 0}),
  //           stagger(
  //             '2s',
  //             animate(
  //               '3s ease-out',
  //               style({opacity: 1}),
  //             ),
  //           ),
  //         ],
  //         {optional: false},
  //       ),
  //       query(':leave',
  //         animate('50ms',
  //           style({ opacity: 0})
  //         ),
  //         { optional: true, }),
  //     ]),
  //   ]),
  // ],
})
export class AppComponent implements OnInit {
  title = 'app';
  sfw = [
    {one: 'Roses are Red', two: ' My name is not Dave', three: ' This makes no sense', four: ' Microwave.'},
    {one: 'Roses are Red', two: ' Violets are Blue', three: ' How did I get', four: ' So lucky with you'},
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' I don\'t really like poems', four: ' But I really like you',
    },
    {
      one: 'Roses are Red', two: ' Internet Explorer is Blue', three: ' Goes on Google', four: ' Types in “Yahoo”',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' One does not simply', four: ' Capture Mewtwo',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' I smile all day', four: ' Because of you',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' Without you', four: ' My life is poo',
    },
    {
      one: 'Roses are dead', two: ' Violets are dying', three: ' Outside I\'m Smiling', four: ' Inside I\'m crying',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' Just wanted to say', four: ' That I love you!',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' Use one of these poems', four: ' As a love message from you',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' The center of my world', four: ' Begins and ends with you',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' It\'s you and me together', four: ' A lifetime of love for two',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' I\'ve never experienced', four: ' A love so true',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' You\'ll always be', four: ' My special boo',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' You should know that', four: ' I think the world of you',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' I\'m seeing a future', four: ' Filled with me and you',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' What I feel in my heart', four: ' Is wonderful and new',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' I dedicated these love words', four: ' Solely to you',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' You have a great sense of humor', four: ' That has me hooked on you',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' We all read shampoo', four: ' While using the loo',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' The molecular formula of Oxygen', four: ' Is written as O2',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' Erythrocytes are in our blood', four: ' And leucocytes too',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' One plus one', four: ' equals two',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' I never knew', four: ' I\'d fall for you',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' You\'re so pretty', four: ' Like a pleasant view',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' We came close', four: ' As time grew',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' You are my life', four: ' Let me hug you',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' Close your eyes', four: ' I wanna kiss you',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' I\'m all yours', four: ' You are mine too',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' I never imagine', four: ' My life without you',
    },
    {
      one: 'Roses are Red', two: ' That is true', three: ' But Violets are purple', four: ' Definitely not Blue',
    },
    {
      one: 'Violets are purple', two: ' Roses are Red', three: ' This poem has', four: ' Twisted my head',
    },
    {
      one: 'Roses are Red', two: ' And if Violets look Blue', three: ' That\'s because Anthocyanidins', four: ' Can vary in Hue',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' Some poems end abruptly',
    },
    {one: 'Roses are Red', two: ' Violets are Blue', three: ' You may not know this', four: ' But I\'m falling for you'},
    ,
    {
      one: 'Charmeleons are Red', two: ' Wartortles are Blue', three: ' Metapod uses Harden', four: ' When I choose Pikachu',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' In Soviet Russia', four: ' Poem writes you',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' I have an STD', four: ' Now so do you',
    },
    {
      one: 'Roses are #FF0000', two: ' Violets are #0000FF', three: ' TL;DR', four: ' They differ in Hue',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' I\'ll never love someone', four: ' The same way I love you',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' Love never crossed my mind', four: ' Until the day I met you',
    },
    {
      one: 'Roses are Red', two: ' the violet\'s blue', three: ' The honey\'s sweet', four: ' And so are you.',
    },
    {
      one: 'Roses are red', two: ' Violets are blue', three: ' I\'ve never met anyone', four: ' As beautiful as you.',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' My heart is full', four: ' Of love for you',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' You are my sunshine', four: ' And I love you',
    },
    {
      one: 'Roses are Grey', two: ' Violets are Grey', three: ' Everything is grey', four: ' I am a dog',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' You farted in your sleep', four: ' But I still love you!',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' Better run away', four: ' I\'m coming to kiss you',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' I finally got a girlfriend', four: ' Now what do I do?',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' Here\'s my number', four: ' I hope to hear from you',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' I am single', four: ' Why don\'t we mingle?',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' Fudge is sweet', four: ' Here\'s some fudge',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' I messed up big time', four: ' Now what can I do?',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' You\'re a psycho', four: ' But I still love you',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' Will you be', four: ' My player #2?',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' I\'ve got Hayfeaver', four: ' Atchoo! Atchoo!',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' Dandelions are small', four: ' Unlike my love for you!',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' Love never crossed my mind', four: ' Until the day I met you',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' Call it what you want', four: ' But I need to be with you',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' You don\'t always smell good', four: ' But I still love you!',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' I\'m telling you I love you', four: ' So what are you gonna do?',
    },
    {
      one: 'Roses are Red', two: ' Better eat your greens', three: ' You\'re the love of my life', four: ' Do you know what that means?',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' The first time I saw you', four: ' My heart instantly knew',
    },
    {one: 'Roses are Red', two: ' Violets are Blue', three: ' Sheep go "Baah"', four: ' And cows go "Moo"'},
    {one: 'Roses are Red', two: ' Violets are Blue', three: ' I can code in Java and Python', four: ' What about you?'},
    ,
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' You are adorable', four: ' If only you knew',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' Please tell me', four: ' What can I do?',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' Our relationship is old', four: ' The spark is still new',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' I wrote all of these', four: ' So I\'m a poet now too?',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' Video games are cheaper', four: ' Than dinner for two',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' That\'s what they say', four: ' But it just isn\'t true',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: '  Erm… Alright', four: ' I didn\'t think this one through',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' Making others smile', four: ' Is what I love to do',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' Unexpected ‘{‘ found', four: ' On line no 32',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' I love my family', four: ' But I love my bae too',
    },
    {
      one: 'Roses are Black', two: ' Violets are black', three: ' Everything is Black', four: ' I\'m blind.',
    },
    {
      one: 'Roses are Red', two: ' Zombies are Green', three: ' When the dead rise', four: ' I want you on my team',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' Sunflowers are yellow', four: ' I bet you were expecting something' +
        ' romantic but these are just gardening facts',
    },
  ];
  nsfw = [
    {
      one: 'Roses are Red', two: ' Here\'s something new', three: ' Violets are Violet', four: ' Not fucking BLUE',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' If I had a brick', four: ' I\'d throw it at you',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' God made everyone else pretty', four: ' What happened to you?',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' If I had a brick', four: ' I’d throw it at you.',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' Hitler died', four: ' Why can’t you?',
    },
    {
      one: 'Roses are red', two: ' Aureoles are pink', three: ' If you show me yours', four: ' I’ll buy you a drink',
    },
    {
      one: 'Roses are Red', two: ' Violets are Black', three: ' Why is your chest', four: ' As flat As your back',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' Open this app again', four: ' And I will murder you',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' You’re an idiot', four: ' Also fuck you',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are Blue',
      three: ' This card was expensive',
      four: ' Take off all your clothes',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are Blue',
      three: ' Some poems rhyme',
      four: ' This one doesn’t',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are Blue',
      three: ' I’m a cougar',
      four: ' How old are you?',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are Blue',
      three: ' Garbage is dumped',
      four: ' And so Are you',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are Blue',
      three: ' Poems are hard',
      four: ' I am too.',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' Get out of my bed', four: ' Seriously who are you?',
    },
    {
      one: 'Roses are Red', two: ' Violets are Blue', three: ' I have a gun', four: ' Now get in the van',
    },
    {
      one: 'Roses are Reddish',
      two: ' Violets are Blueish',
      three: ' If it wasn’t for Jesus',
      four: ' We’d all be jewish',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are Blue',
      three: ' Onions stink',
      four: ' And so do you',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are Blue',
      three: ' Pornhub is down',
      four: ' Your moms Facebook will do.',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are Blue',
      three: ' No mutual friends',
      four: ' Who the hell are you?',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are Blue',
      three: ' Your webcam is on',
      four: ' And I’m watching you',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are Blue',
      three: ' I am schizophrenic',
      four: ' And so Am I.',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are Blue',
      three: ' I’m waiting for the day',
      four: ' When We finally screw',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are Blue',
      three: ' By the end of the day',
      four: ' You’ll be in my bed',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are Blue',
      three: ' I’ve got genital warts',
      four: ' Soon you will too.',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are Blue',
      three: ' what I thought was vaseline',
      four: ' Turned out To be glue',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are Blue',
      three: ' Your mom is super pretty',
      four: ' So the fuck happened to you?!',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are Blue',
      three: ' I know I’m hot',
      four: ' And not into you',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are Blue',
      three: ' We have nothing in common',
      four: ' So baby we’re through',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are Blue',
      three: ' I already said I was sorry',
      four: ' Can’t we just screw?',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are Blue',
      three: ' You are stupid',
      four: ' He is using you',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are Grey',
      three: ' I want you in my life',
      four: ' So maybe I’m gay?',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are blue',
      three: ' Sheep go "Baah",',
      four: 'And your mom goes "Moo"',
    },
    {
      one: 'Roses are Red',
      two: ' Plants are Green',
      three: ' If you ride me',
      four: ' I’ll make you cream',
    },
    {
      one: 'Roses are Red',
      two: ' Chocolate is brown',
      three: ' I expected nothing',
      four: ' And you still let me down',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are Blue',
      three: ' Sugar is sweet',
      four: ' But you’re too fat to enjoy that treat.',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are Blue',
      three: ' I’m alone on Valentines day',
      four: ' I hate you.',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are Blue',
      three: ' Remove the curtain',
      four: ' I want a view',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are Blue',
      three: ' All these beautiful girls',
      four: ' And then there is you',
    },
    {
      one: 'Roses are Blue',
      two: ' Violets are Blue',
      three: ' I hate poems',
      four: ' Even more than I hate you',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are Blue',
      three: ' I said it was me',
      four: ' But it was actually you',
    },
    {
      one: 'Roses are Red',
      two: ' A dozen are heavy',
      three: ' There’s vomit on his sweater already',
      four: ' Moms spaghetti',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are Blue',
      three: ' I’d rather be dead',
      four: ' Than stuck with you!',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are Blue',
      three: ' Rhyming is hard',
      four: ' Like I am for you',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are Blue',
      three: ' This poem is overused',
      four: ' And your sister is too',
    },
    {
      one: 'Violets are Blue',
      two: ' Roses are Red',
      three: ' We’re doing this backwards',
      four: ' That’s what she said!',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are Blue',
      three: ' Like the Titanic',
      four: ' I’m going down on you',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are Blue',
      three: ' You weren\'t my first choice but',
      four: ' I guess you\'ll do.',
    },
    {
      one: 'Roses are Red',
      two: ' Mornings are hard',
      three: ' We suck at poetry',
      four: ' Coffee.',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are Blue',
      three: ' You weren\'t my first choice but',
      four: ' I guess you\'ll do.',
    },
    {
      one: 'Roses are Red',
      two: ' Mornings are hard',
      three: ' We suck at poetry',
      four: ' Coffee.',
    },
    {
      one: 'Roses are Red',
      two: ' Sex is hard',
      three: ' Yeah you like that? You fucking retard',
    },
    {
      one: 'Roses are red',
      two: ' Fuck this poem',
      three: ' I\'m going to bed',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are Blue',
      three: ' Can we have sex now? I\'ve paid my dues',
    },
    {
      one: 'Roses are Brown',
      two: ' Violets are Brown',
      three: 'Who shit in my garden!?',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are Blue',
      three: ' All of my naughty thoughts',
      four: ' Always involve you',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are Blue',
      three: ' I\'ve got five fingers',
      four: ' And the middle one\'s for you',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are Blue',
      three: ' You are a bitch',
      four: ' And An ugly one too.',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are Blue',
      three: ' Vodka is cheaper',
      four: ' Than dinner for Two',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are Blue',
      three: ' Lil stupid ass bitch',
      four: ' I ain\'t fuckin\' with you',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are Blue',
      three: ' Get on your knees',
      four: ' You know what to do',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are Blue',
      three: ' I\'m proud to say',
      four: ' I\'m not a slut like you',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are Blue',
      three: ' I thought I was ugly',
      four: ' Until I saw you',
    },
    {
      one: 'Roses are Red',
      two: ' Lemons are sour',
      three: ' Open your legs',
      four: ' And give me an hour',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are Blue',
      three: ' Damn',
      four: ' Let me kiss you.',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are Blue',
      three: ' Your emotions are dead',
      four: ' Now I stink of you.',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are Blue',
      three: ' The smell of shit',
      four: ' Reminds me of you',
    },
    {
      one: 'Roses are Red',
      two: ' Pizza sauce is too',
      three: ' I ordered a large',
      four: ' And none of it is for you.',
    },
    {
      one: 'Roses are red',
      two: ' Foxes are clever',
      three: ' I like your butt',
      four: ' Let me touch it forever.',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are Blue',
      three: ' So are my balls',
      four: ' Please help.',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are Blue',
      three: ' I\'m using my hand',
      four: ' But thinking of you',
    },
    {
      one: 'Roses are Red',
      two: ' True love is rare',
      three: ' Booty booty booty booty',
      four: ' Rockin\' everywhere',
    },
    {
      one: 'Flowers give smiles',
      two: ' Clover\'s give luck',
      three: ' Eyy bby',
      four: ' You wan sum fun?',
    },
    {
      one: 'Roses are Red',
      two: ' You are so fine',
      three: ' I\'ll be the 6',
      four: ' If you\'ll be the 9',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are Blue',
      three: ' Who is your daddy',
      four: ' And what does he do?',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are Blue',
      three: ' Wake me up',
      four: ' And I\'ll bitch slap you',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are Blue',
      three: ' But she wouldn\'t know that',
      four: ' Because you never Bring her flowers you Bastard',
    },
    {
      one: 'Roses are Red',
      two: ' Pickles are Green',
      three: ' I love your legs',
      four: ' And what\'s in-between.',
    },
    {
      one: 'Roses are Red',
      two: ' Tacos are enjoyable',
      three: ' Don\'t blame Mexicans',
      four: ' Because you\'re unemployable',
    },
    {
      one: 'Roses are Red',
      two: ' Romance is dead',
      three: ' Everyday I suffer',
      four: ' From Existential dread',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are Blue',
      three: ' I like anal',
      four: ' Let me do it to you',
    },
    {
      one: 'Roses are Red',
      two: ' The grass is Green',
      three: ' I want you in my bed',
      four: ' If you know what I mean.',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are Blue',
      three: ' I\'d rather be single',
      four: ' Than be with you',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are Blue',
      three: ' Now lets get naked',
      four: ' So I can bone you',
    },
    {
      one: 'Roses are Red',
      two: ' Chocolates are brown',
      three: ' You\'re getting neither',
      four: ' So calm the fuck down',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are Blue',
      three: ' It don\'t always be like that',
      four: ' But sometimes it do.',
    },
    {
      one: 'Roses are Red',
      two: ' Corpses are Blue',
      three: ' Sorry you\'re dead',
      four: ' I forgot your allergic to roses',
    },
    {
      one: 'Roses are Red',
      two: ' And so are your lips',
      three: ' So Sit on my face',
      four: ' And wiggle your hips',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are Blue',
      three: ' Karma is a bitch',
      four: ' And it\'s coming for you',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are Blue',
      three: ' Hey there beautiful',
      four: ' Send Some nudes',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are Blue',
      three: ' I almost always',
      four: ' Masturbate to you',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are dead',
      three: ' My water is empty',
      four: ' Just like your head',
    },
    {
      one: 'Roses are Red',
      two: ' Birds love to fly',
      three: ' Existence is futile',
      four: ' I just want to die',
    },
    {
      one: 'Tudor roses are red',
      two: ' Tudor roses are white',
      three: ' Let\'s pretend you\'re your sister',
      four: ' On this valentines night',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are Blue',
      three: ' I have Alzheimer\'s',
      four: ' Roses are red',
    },
    {
      one: 'Roses are Red',
      two: ' Tulips are black',
      three: ' You\'d look good',
      four: ' With a knife in Your back',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are Blue',
      three: ' One ripped condom',
      four: ' Is what caused you',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are Blue',
      three: ' I cry myself to sleep',
      four: ' Masturbating to you',
    },
    {
      one: 'Roses are Red',
      two: ' Black is Black',
      three: ' Come to my house',
      four: ' And sell me some crack',
    },
    {
      one: 'Roses are Red',
      two: ' Grass is greener',
      three: ' I think of you',
      four: ' When I touch my Weiner',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are Blue',
      three: ' What I thought was Vaseline',
      four: ' Turned out To be glue!',
    },
    {
      one: 'Roses are Red',
      two: ' Dead ones are grey',
      three: ' Now you really must tell me',
      four: ' Does your mom know you\'re gay?',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are Blue',
      three: ' Does this smell',
      four: ' Like chloroform to you?',
    },
    {
      one: 'Roses are Red',
      two: ' Valentines day is crap',
      three: ' I don\'t have a girlfriend',
      four: ' Fap Fap Fap',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are Curved',
      three: ' Here is a subpoena for divorce court',
      four: ' You\'ve now been served.',
    },
    {
      one: 'Roses are Red',
      two: ' Violets are Blue',
      three: ' I suck at poetry',
      four: ' Show me your tits',
    },
  ];
  list = [...this.nsfw];

  public selected = null;

  public toggle = 'nsfw';

  constructor() {}

  ngOnInit() {
    this.picker();
  }

  public toggleList(val) {
    this.list = val === 'nsfw' ? [...this.nsfw] : [...this.sfw];
    this.toggle = val;
  }

  public timer(cancel: boolean) {
    // Randomly generate a number based on what list is selected
    // Set the interval to change based on how many properties the object has
    // Display the selected object.
    var timer = this.getInterval();
    setTimeout(() => {
      this.selected = null;

      setTimeout(() => {
        this.picker();
      }, 100);
    }, timer);
  }

  public getInterval() {
    if (this.selected == null) return 10000;
    return ((Object.keys(this.selected).length) * 3000) + 2650;
  }

  public picker() {
    var rand = Math.floor(Math.random() * (this.list.length + 1));
    this.selected = [...Object.values(this.list[rand])];
    delete this.list[rand];
    this.timer(false);
  }
}
