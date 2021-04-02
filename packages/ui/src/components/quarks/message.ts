import {
  chromaticNotificationText,
  typographic,
  ChromaticNotification,
  Typographic,
} from '../../traits'

export interface MessageProps extends ChromaticNotification, Typographic {}

export const messageStyles = () => [chromaticNotificationText, typographic]
