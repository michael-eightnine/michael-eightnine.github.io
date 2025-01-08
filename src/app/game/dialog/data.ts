import { AreaId, ItemId } from '../types';

export const ITEM_DIALOG: Record<
  ItemId,
  { attempt: string; failure: string; success: string; alreadyHeld: string }
> = {
  [ItemId.Door]: {
    attempt:
      'The hinges are rusted and the handles glisten with black slime. Open the doors, you can wash your hands later.',
    failure:
      'The doors are locked. The heavy slabs refuse to budge. Your hands are covered in slime. All for nothing. The bell tolls incessantly.',
    success: 'You made it 2 heaven',
    alreadyHeld: ''
  },
  [ItemId.Coins]: {
    attempt: 'Force the chest open.',
    failure: '',
    success:
      'Within the chest, amongst small bones and pieces of clay, resides a handful of gold coins. Yours now.',
    alreadyHeld:
      'All that is left is small bones and pieces of clay. Remembrances surely, but nothing for you to own.'
  },
  [ItemId.Key]: {
    attempt: 'Replace the wilted lily. Make peace.',
    failure: "How can you give what you don't have?",
    success:
      'The grave slides open with a thunderous howl. Within you find not a corpse, but a large rusted key. Covered in black slime. The grave slams shut again.',
    alreadyHeld:
      'Residual black slime clings to the edges of the tomb. It will not open again. The key you took grows cold in your pocket. You feel remarkably fragile.'
  },
  [ItemId.Lily]: {
    attempt: 'Pay the price, receive the flower.',
    failure:
      'Penance is not enough, but gold is. Your pockets are woefully light.',
    success:
      'The case unlocks. The smell of copper assaults. You place the lily in your jacket, wrapped in plastic. The petals burn your fingertips.',
    alreadyHeld:
      'The flower inexplicably reforms in the case, though it is still in your pocket.  There is nothing left for you here.'
  }
};

export const RETURN_DIALOG: Partial<Record<AreaId, string>> = {
  [AreaId.LilyCase]: 'Back away from the lily case.',
  [AreaId.Chest]: 'Return to the cave entrance.',
  [AreaId.Grave]: 'Leave the grave, knowing it will see you one day.'
};

export const ENTER_DIALOG: Partial<Record<AreaId, string>> = {
  [AreaId.LilyCase]:
    'A display case is visible in the back of the shop. Pristine. Could the contents be yours?',
  [AreaId.Chest]:
    'Step forward and investigate the hole. Something to find. Something to take with you?',
  [AreaId.Grave]:
    'The grave compels. A familiarity or a glimpse of what is to come? Walk forward.'
};

export const AREA_DIALOG: Record<AreaId, { title: string; message: string }> = {
  [AreaId.Cathedral]: {
    title: 'Frozen Cathedral',
    message:
      'Forgotten space. 12 years in Catholic school. Frost creeps into your boots. Atop the steep rise of the stairs a large set of doors stand closed. You must go through.'
  },
  [AreaId.Cave]: {
    title: 'Wet Cave',
    message:
      'A continuous dripping. Wet feet slap in the distance. Best not to stay too long. Yet a hole in the wall catches your eye. Something hidden?'
  },
  [AreaId.Chest]: {
    title: 'Forgotten Chest',
    message:
      'Waist high. An enormous chest made of dark metal and wood. Large enough to lie in. The lid seems ajar.'
  },
  [AreaId.Florist]: {
    title: 'The Florist',
    message:
      'Light blue interior. Many arrangements. A kinder soul would consider them wilted, we cannot. The dust on the counter proves no one has arrived in some time.'
  },
  [AreaId.Grave]: {
    title: 'Untended Tomb',
    message:
      'A solitary tomb of heavy stone. Large. Large enough for two? Its headstone cast aside is not blank, it was simply never engraved. A wilted lily in a vase sits to the side.'
  },
  [AreaId.LilyCase]: {
    title: 'The Lily',
    message:
      'Encased in glass. Astonishingly pale. A small note rests on the floor near it. "Nothing needed comes without cost."'
  },
  [AreaId.Marsh]: {
    title: 'Burial Marsh',
    message:
      'Generations rest. Many in the first place they called home. Mud grabs your boots. A scream in the distance. A grave, larger than the others, is at the center.'
  },
  [AreaId.TownSquare]: {
    title: 'Dilapidated Plaza',
    message:
      'A fountain in the town plaza. Dry for ages. A cavernous city surrounds you. People could not sustain here. A bell rings deeply to the north. The sound of hammers rings below.'
  }
};
