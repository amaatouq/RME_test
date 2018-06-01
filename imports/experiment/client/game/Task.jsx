import React from "react";
import { Tooltip, Position } from "@blueprintjs/core";

export default class Task extends React.Component {
  handleSubmit = answer => {
    const { player } = this.props;
    player.round.set("answer", answer);
    player.stage.submit();
  };

  render() {
    const { round } = this.props;
    const task = round.get("task");
    let content = [];
    let options = [];

    task.options.forEach(option => {
      content.push(
        <span>
          <em>Description:</em>
          {" " + taskAnswerDescription[option]["description"]}
          <br />
          <em>Sentence:</em>
          {" " + taskAnswerDescription[option]["sentence"]}
        </span>
      );

      //capitalize 'option'
      options.push(option.charAt(0).toUpperCase() + option.slice(1));
    });

    return (
      <div className="task">
        <Tooltip
          content={content[0]}
          usePortal={false}
          position={Position.TOP_LEFT}
          className={"left"}
        >
          <button
            className="pt-button pt-minimal pt-large"
            onClick={() => this.handleSubmit(options[0].toLowerCase())}
          >
            {options[0]}
          </button>
        </Tooltip>

        <Tooltip
          className={"right"}
          content={content[1]}
          usePortal={false}
          position={Position.TOP_RIGHT}
        >
          <button
            className="pt-button pt-minimal pt-large"
            onClick={() => this.handleSubmit(options[1].toLowerCase())}
          >
            {options[1]}
          </button>
        </Tooltip>

        <div className="task-stimulus">
          <img src={"/experiment/faces/" + task.image} className="task-image" />
        </div>

        <Tooltip
          content={content[2]}
          usePortal={false}
          position={Position.BOTTOM_LEFT}
          className={"left"}
        >
          <button
            className="pt-button pt-minimal pt-large"
            onClick={() => this.handleSubmit(options[2].toLowerCase())}
          >
            {options[2]}
          </button>
        </Tooltip>

        <Tooltip
          content={content[3]}
          usePortal={false}
          position={Position.BOTTOM_RIGHT}
          className={"right"}
        >
          <button
            className="pt-button pt-minimal pt-large"
            onClick={() => this.handleSubmit(options[3].toLowerCase())}
          >
            {options[3]}
          </button>
        </Tooltip>
      </div>
    );
  }
}

//this should be moved to another file
const taskAnswerDescription = {
  ashamed: {
    emotion: "ASHAMED",
    description: "overcome with shame or guilt",
    sentence:
      "The boy felt ashamed when his mother discovered him stealing money from her purse."
  },
  sceptical: {
    emotion: "SCEPTICAL",
    description: "doubtful, suspicious, mistrusting",
    sentence:
      "Patrick looked sceptical as someone read out his horoscope to him."
  },
  satisfied: {
    emotion: "SATISFIED",
    description: "content, fulfilled",
    sentence:
      "Steve felt very satisfied after he had got his new flat just how he wanted it."
  },
  aghast: {
    emotion: "AGHAST",
    description: "horrified, astonished, alarmed",
    sentence: "Jane was aghast when she discovered her house had been burgled."
  },
  doubtful: {
    emotion: "DOUBTFUL",
    description: "dubious, suspicious, not really believing",
    sentence: "Mary was doubtful that her son was telling the truth."
  },
  playful: {
    emotion: "PLAYFUL",
    description: "full of high spirits and fun",
    sentence: "Neil was feeling playful at his birthday party."
  },
  thoughtful: {
    emotion: "THOUGHTFUL",
    description: "thinking about something",
    sentence:
      "Phil looked thoughtful as he sat waiting for the girlfriend he was about to finish with."
  },
  grateful: {
    emotion: "GRATEFUL",
    description: "thankful",
    sentence: "Kelly was very grateful for the kindness shown by the stranger."
  },
  arrogant: {
    emotion: "ARROGANT",
    description: "conceited, self-important, having a big opinion of oneself",
    sentence:
      "The arrogant man thought he knew more about politics than everyone else in the room."
  },
  nervous: {
    emotion: "NERVOUS",
    description: "apprehensive, tense, worried",
    sentence: "Just before her job interview, Alice felt very nervous."
  },
  concerned: {
    emotion: "CONCERNED",
    description: "worried, troubled",
    sentence:
      "The doctor was concerned when his patient took a turn for the worse."
  },
  hopeful: {
    emotion: "HOPEFUL",
    description: "optimistic",
    sentence: "Larry was hopeful that the post would bring good news."
  },
  eager: {
    emotion: "EAGER",
    description: "keen",
    sentence:
      "On Christmas morning, the children were eager to open their presents."
  },
  contemplative: {
    emotion: "CONTEMPLATIVE",
    description: "reflective, thoughtful, considering",
    sentence:
      "John was in a contemplative mood on the eve of his 60th birthday."
  },
  incredulous: {
    emotion: "INCREDULOUS",
    description: "not believing",
    sentence: "Simon was incredulous when he heard that he had won the lottery."
  },
  friendly: {
    emotion: "FRIENDLY",
    description: "sociable, amiable",
    sentence:
      "The friendly girl showed the tourists the way to the town centre."
  },
  desire: {
    emotion: "DESIRE",
    description: "passion, lust, longing for",
    sentence: "Kate had a strong desire for chocolate."
  },
  dominant: {
    emotion: "DOMINANT",
    description: "commanding, bossy",
    sentence:
      "The sergeant major looked dominant as he inspected the new recruits."
  },
  puzzled: {
    emotion: "PUZZLED",
    description: "perplexed, bewildered, confused",
    sentence:
      "After doing the crossword for an hour, June was still puzzled by one clue."
  },
  sarcastic: {
    emotion: "SARCASTIC",
    description: "cynical, mocking, scornful",
    sentence:
      "The comedian made a sarcastic comment when someone came into the theatre late."
  },
  earnest: {
    emotion: "EARNEST",
    description: "having a serious intention",
    sentence: "Harry was very earnest about his religious beliefs."
  },
  insisting: {
    emotion: "INSISTING",
    description: "demanding, persisting, maintaining",
    sentence:
      "After a work outing, Frank was insisting he paid the bill for everyone."
  },
  disappointed: {
    emotion: "DISAPPOINTED",
    description: "displeased, disgruntled",
    sentence:
      "Manchester United fans were disappointed not to win the Championship."
  },
  distrustful: {
    emotion: "DISTRUSTFUL",
    description: "suspicious, doubtful, wary",
    sentence: "The old woman was distrustful of the stranger at her door."
  },
  bewildered: {
    emotion: "BEWILDERED",
    description: "utterly confused, puzzled, dazed",
    sentence:
      "The child was bewildered when visiting the big city for the first time."
  },
  shy: {
    emotion: "SHY",
    description: "shamed, insecure",
    sentence: "She asked for forgiveness shyly."
  },
  worried: {
    emotion: "WORRIED",
    description: "anxious, fretful, troubled",
    sentence: "When her cat went missing, the girl was very worried."
  },
  anxious: {
    emotion: "ANXIOUS",
    description: "worried, tense, uneasy",
    sentence: "The student was feeling anxious before taking her final exams."
  },
  fearful: {
    emotion: "FEARFUL",
    description: "terrified, worried",
    sentence: "In the dark streets, the women felt fearful."
  },
  intrigued: {
    emotion: "INTRIGUED",
    description: "very curious, very interested",
    sentence: "A mystery phone call intrigued Zoe."
  },
  joking: {
    emotion: "JOKING",
    description: "being funny, playful",
    sentence: "Gary was always joking with his friends."
  },
  comforting: {
    emotion: "COMFORTING",
    description: "consoling, compassionate",
    sentence: "The nurse was comforting the wounded soldier."
  },
  curious: {
    emotion: "CURIOUS",
    description: "inquisitive, inquiring, prying",
    sentence: "Louise was curious about the strange shaped parcel."
  },
  irritated: {
    emotion: "IRRITATED",
    description: "exasperated, annoyed",
    sentence: "Frances was irritated by all the junk mail she received."
  },
  insulting: {
    emotion: "INSULTING",
    description: "rude, offensive",
    sentence:
      "The football crowd was insulting the referee after he gave a penalty."
  },
  fascinated: {
    emotion: "FASCINATED",
    description: "captivated, really interested",
    sentence:
      "At the seaside, the children were fascinated by the creatures in the rock pools."
  },
  imploring: {
    emotion: "IMPLORING",
    description: "begging, pleading",
    sentence:
      "Nicola looked imploring as she tried to persuade her dad to lend her the car."
  },
  apologetic: {
    emotion: "APOLOGETIC",
    description: "feeling sorry",
    sentence:
      "The waiter was very apologetic when he spilt soup all over the customer."
  },
  indecisive: {
    emotion: "INDECISIVE",
    description: "unsure, hesitant, unable to make your mind up",
    sentence:
      "Tammy was so indecisive that she couldn't even decide what to have for lunch."
  },
  assertive: {
    emotion: "ASSERTIVE",
    description: "confident, dominant, sure of oneself",
    sentence: "The assertive woman demanded that the shop give her a refund."
  },
  regretful: {
    emotion: "REGRETFUL",
    description: "sorry",
    sentence:
      "Lee was always regretful that he had never travelled when he was younger."
  },
  uneasy: {
    emotion: "UNEASY",
    description: "unsettled, apprehensive, troubled",
    sentence:
      "Karen felt slightly uneasy about accepting a lift from the man she had only met that day."
  },
  terrified: {
    emotion: "TERRIFIED",
    description: "alarmed, fearful",
    sentence: "The boy was terrified when he thought he saw a ghost."
  },
  baffled: {
    emotion: "BAFFLED",
    description: "confused, puzzled, dumbfounded",
    sentence: "The detectives were completely baffled by the murder case."
  },
  cautious: {
    emotion: "CAUTIOUS",
    description: "careful, wary",
    sentence:
      "Sarah was always a bit cautious when talking to someone she did not know."
  },
  preoccupied: {
    emotion: "PREOCCUPIED",
    description: "absorbed, engrossed in one's own thoughts",
    sentence:
      "Worrying about her mother's illness made Debbie preoccupied at work"
  },
  hostile: {
    emotion: "HOSTILE",
    description: "unfriendly",
    sentence:
      "The two neighbours were hostile towards each other because of an argument about loud music."
  },
  guilty: {
    emotion: "GUILTY",
    description: "feeling sorry for doing something wrong",
    sentence: "Charlie felt guilty about having an affair."
  },
  contented: {
    emotion: "CONTENTED",
    description: "satisfied",
    sentence: "After a nice walk and a good meal, David felt very contented."
  },
  horrified: {
    emotion: "HORRIFIED",
    description: "terrified, appalled",
    sentence:
      "The man was horrified to discover that his new wife was already married."
  },
  panicked: {
    emotion: "PANICKED",
    description: "distraught, feeling of terror or anxiety",
    sentence:
      "On waking to find the house on fire, the whole family was panicked."
  },
  deciding: {
    emotion: "DECIDING",
    description: "making your mind up",
    sentence: "The man was deciding whom to vote for in the election."
  },
  encouraging: {
    emotion: "ENCOURAGING",
    description: "hopeful, heartening, supporting",
    sentence:
      "All the parents were encouraging their children in the school sports day."
  },
  embarrassed: {
    emotion: "EMBARRASSED",
    description: "ashamed",
    sentence:
      "After forgetting a colleague's name, Jenny felt very embarrassed."
  },
  stern: {
    emotion: "STERN",
    description: "severe, strict, firm",
    sentence: "The teacher looked very stern as he told the class off."
  },
  sympathetic: {
    emotion: "SYMPATHETIC",
    description: "kind, compassionate",
    sentence:
      "The nurse looked sympathetic as she told the patient the bad news."
  },
  threatening: {
    emotion: "THREATENING",
    description: "menacing, intimidating",
    sentence: "The large, drunken man was acting in a very threatening way."
  },
  confident: {
    emotion: "CONFIDENT",
    description: "self-assured, believing in oneself",
    sentence:
      "The tennis player was feeling very confident about winning his match."
  },
  reflective: {
    emotion: "REFLECTIVE",
    description: "contemplative, thoughtful",
    sentence:
      "George was in a reflective mood as he thought about what he'd done with his life."
  },
  decisive: {
    emotion: "DECISIVE",
    description: "already made your mind up",
    sentence:
      "Jane looked very decisive as she walked into the polling station."
  },
  bored: {
    emotion: "BORED",
    description: "blase, disinterested",
    sentence: "Bored, she switched from one channel to the next."
  },
  affectionate: {
    emotion: "AFFECTIONATE",
    description: "showing fondness towards someone",
    sentence:
      "Most mothers are affectionate to their babies by giving them lots of kisses and cuddles."
  },
  dispirited: {
    emotion: "DISPIRITED",
    description: "glum, miserable, low",
    sentence: "Adam was dispirited when he failed his exams."
  },
  perplexed: {
    emotion: "PERPLEXED",
    description: "bewildered, puzzled, confused",
    sentence: "Frank was perplexed by the disappearance of his garden gnomes."
  },
  relieved: {
    emotion: "RELIEVED",
    description: "freed from worry or anxiety",
    sentence:
      "At the restaurant, Ray was relieved to find that he had not forgotten his wallet."
  },
  relaxed: {
    emotion: "RELAXED",
    description: "taking it easy, calm, carefree",
    sentence: "On holiday, Pam felt happy and relaxed."
  },
  hateful: {
    emotion: "HATEFUL",
    description: "showing intense dislike",
    sentence: "The two sisters were hateful to each other and always fighting."
  },
  convinced: {
    emotion: "CONVINCED",
    description: "certain, absolutely positive",
    sentence: "Richard was convinced he had come to the right decision."
  },
  depressed: {
    emotion: "DEPRESSED",
    description: "miserable",
    sentence: "George was depressed when he didn't receive any birthday cards."
  },
  flirtatious: {
    emotion: "FLIRTATIOUS",
    description: "brazen, saucy, teasing, playful",
    sentence:
      "Connie was accused of being flirtatious when she winked at a stranger at a party."
  },
  entertained: {
    emotion: "ENTERTAINED",
    description: "absorbed and amused or pleased by something",
    sentence: "I was very entertained by the magician."
  },
  excited: {
    emotion: "EXCITED",
    description: "agitated, eager",
    sentence:
      "He had been looking forward to the letter and was excited when it arrived."
  },
  offended: {
    emotion: "OFFENDED",
    description: "insulted, wounded, having hurt feelings",
    sentence:
      "When someone made a joke about her weight, Martha felt very offended."
  },
  accusing: {
    emotion: "ACCUSING",
    description: "blaming",
    sentence: "The policeman was accusing the man of stealing a wallet."
  },
  suspicious: {
    emotion: "SUSPICIOUS",
    description: "disbelieving, suspecting, doubting",
    sentence:
      "After Sam had lost his wallet for the second time at work, he grew suspicious of one of his colleagues."
  },
  confused: {
    emotion: "CONFUSED",
    description: "puzzled, perplexed",
    sentence:
      "Lizzie was so confused by the directions given to her, she got lost."
  },
  dubious: {
    emotion: "DUBIOUS",
    description: "doubtful, suspicious",
    sentence:
      "Peter was dubious when offered a surprisingly cheap television in a pub."
  },
  reassuring: {
    emotion: "REASSURING",
    description: "supporting, encouraging, giving someone confidence",
    sentence:
      "Andy tried to look reassuring as he told his wife that her new dress did suit her."
  },
  anticipating: {
    emotion: "ANTICIPATING",
    description: "expecting",
    sentence:
      "At the start of the football match, the fans were anticipating a quick goal."
  },
  indifferent: {
    emotion: "INDIFFERENT",
    description: "disinterested, unresponsive, don't care",
    sentence:
      "Terry was completely indifferent as to whether they went to the cinema or the pub."
  },
  resentful: {
    emotion: "RESENTFUL",
    description: "bitter, hostile",
    sentence:
      "The businessman felt very resentful towards his younger colleague who had been promoted above him."
  },
  pensive: {
    emotion: "PENSIVE",
    description: "thinking about something slightly worrying",
    sentence:
      "Susie looked pensive on the way to meeting her boyfriend's parents for the first time."
  },
  tentative: {
    emotion: "TENTATIVE",
    description: "hesitant, uncertain, cautious",
    sentence:
      "Andrew felt a bit tentative as he went into the room full of strangers."
  },
  defiant: {
    emotion: "DEFIANT",
    description: "insolent, bold, don\u0092t care what anyone else thinks",
    sentence:
      "The animal protester remained defiant even after being sent to prison."
  },
  interested: {
    emotion: "INTERESTED",
    description: "inquiring, curious",
    sentence:
      "After seeing Jurassic Park, Hugh grew very interested in dinosaurs."
  },
  fantasizing: {
    emotion: "FANTASIZING",
    description: "daydreaming",
    sentence: "Emma was fantasizing about being a film star."
  },
  flustered: {
    emotion: "FLUSTERED",
    description: "confused, nervous and upset",
    sentence:
      "Sarah felt a bit flustered when she realised how late she was for the meeting and that she had forgotten an important document."
  },
  despondent: {
    emotion: "DESPONDENT",
    description: "gloomy, despairing, without hope",
    sentence: "Gary was despondent when he did not get the job he wanted."
  },
  jealous: {
    emotion: "JEALOUS",
    description: "envious",
    sentence:
      "Tony was jealous of all the taller, better-looking boys in his class."
  },
  alarmed: {
    emotion: "ALARMED",
    description: "fearful, worried, filled with anxiety",
    sentence: "Claire was alarmed when she thought she was being followed home."
  },
  enthusiastic: {
    emotion: "ENTHUSIASTIC",
    description: "very eager, keen",
    sentence: "Susan felt very enthusiastic about her new fitness plan."
  },
  upset: {
    emotion: "UPSET",
    description: "agitated, worried, uneasy",
    sentence: "The man was very upset when his mother died."
  },
  amused: {
    emotion: "AMUSED",
    description: "finding something funny",
    sentence: "I was amused by a funny joke someone told me."
  },
  impatient: {
    emotion: "IMPATIENT",
    description: "restless, wanting something to happen soon",
    sentence:
      "Jane grew increasingly impatient as she waited for her friend who was already 20 minutes late."
  },
  serious: {
    emotion: "SERIOUS",
    description: "solemn, grave",
    sentence:
      "The bank manager looked serious as he refused Nigel an overdraft."
  },
  annoyed: {
    emotion: "ANNOYED",
    description: "irritated, displeased",
    sentence:
      "Jack was annoyed when he found out he had missed the last bus home."
  }
};
