import FontAwesome from "@expo/vector-icons/FontAwesome";
import { IconProps } from "@expo/vector-icons/build/createIconSet";
import React from "react";
import { Pressable, PressableProps, StyleSheet } from "react-native";
import { StyleProp } from "react-native/Libraries/StyleSheet/StyleSheet";
import { ViewStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";

type IconAttrs = IconProps<
  | "link"
  | "search"
  | "image"
  | "header"
  | "forward"
  | "retweet"
  | "minus"
  | "plus"
  | "info"
  | "exclamation"
  | "check"
  | "close"
  | "book"
  | "bars"
  | "question"
  | "pause"
  | "home"
  | "laptop"
  | "star"
  | "filter"
  | "save"
  | "user"
  | "phone"
  | "paperclip"
  | "inbox"
  | "lock"
  | "qrcode"
  | "tags"
  | "cloud"
  | "eye"
  | "camera"
  | "windows"
  | "heart"
  | "calculator"
  | "chrome"
  | "github"
  | "upload"
  | "download"
  | "unlock"
  | "play"
  | "tag"
  | "calendar"
  | "database"
  | "barcode"
  | "hourglass"
  | "key"
  | "flag"
  | "car"
  | "gift"
  | "bank"
  | "android"
  | "trademark"
  | "copyright"
  | "wifi"
  | "edit"
  | "warning"
  | "table"
  | "dashboard"
  | "google"
  | "amazon"
  | "codepen"
  | "facebook-square"
  | "dropbox"
  | "linkedin-square"
  | "gitlab"
  | "skype"
  | "youtube"
  | "wechat"
  | "twitter"
  | "weibo"
  | "behance"
  | "dribbble"
  | "behance-square"
  | "instagram"
  | "slack"
  | "500px"
  | "adjust"
  | "align-left"
  | "align-right"
  | "archive"
  | "arrow-down"
  | "arrow-left"
  | "arrow-right"
  | "arrow-up"
  | "battery"
  | "bell"
  | "bookmark"
  | "briefcase"
  | "bug"
  | "chevron-down"
  | "chevron-left"
  | "chevron-right"
  | "chevron-up"
  | "circle"
  | "clipboard"
  | "code"
  | "cog"
  | "compass"
  | "copy"
  | "creative-commons"
  | "credit-card"
  | "crop"
  | "eraser"
  | "facebook"
  | "flash"
  | "flickr"
  | "folder"
  | "foursquare"
  | "globe"
  | "graduation-cap"
  | "houzz"
  | "language"
  | "lastfm"
  | "leaf"
  | "level-down"
  | "level-up"
  | "linkedin"
  | "list"
  | "magnet"
  | "map"
  | "medium"
  | "mobile"
  | "mouse-pointer"
  | "music"
  | "paper-plane"
  | "paypal"
  | "pencil"
  | "pie-chart"
  | "pinterest"
  | "print"
  | "qq"
  | "renren"
  | "reply"
  | "reply-all"
  | "rocket"
  | "rss"
  | "scissors"
  | "scribd"
  | "share"
  | "shield"
  | "shopping-bag"
  | "shopping-basket"
  | "shopping-cart"
  | "signal"
  | "slideshare"
  | "soundcloud"
  | "spotify"
  | "stumbleupon"
  | "suitcase"
  | "tablet"
  | "thermometer"
  | "thumbs-down"
  | "thumbs-up"
  | "ticket"
  | "trash"
  | "tree"
  | "tripadvisor"
  | "trophy"
  | "tumblr"
  | "tv"
  | "users"
  | "video-camera"
  | "vimeo"
  | "vine"
  | "vk"
  | "xing"
  | "yelp"
  | "comment"
  | "envelope"
  | "external-link"
  | "gear"
  | "navicon"
  | "refresh"
  | "spinner"
  | "undo"
  | "align-center"
  | "align-justify"
  | "anchor"
  | "bar-chart"
  | "bluetooth"
  | "bold"
  | "check-circle"
  | "check-square"
  | "coffee"
  | "columns"
  | "fast-forward"
  | "file"
  | "file-text"
  | "film"
  | "headphones"
  | "italic"
  | "life-buoy"
  | "map-pin"
  | "minus-circle"
  | "minus-square"
  | "pause-circle"
  | "percent"
  | "play-circle"
  | "plus-circle"
  | "plus-square"
  | "repeat"
  | "send"
  | "server"
  | "sliders"
  | "square"
  | "stop-circle"
  | "terminal"
  | "toggle-left"
  | "toggle-right"
  | "trello"
  | "truck"
  | "twitch"
  | "umbrella"
  | "underline"
  | "user-plus"
  | "glass"
  | "envelope-o"
  | "star-o"
  | "th-large"
  | "th"
  | "th-list"
  | "remove"
  | "times"
  | "search-plus"
  | "search-minus"
  | "power-off"
  | "trash-o"
  | "file-o"
  | "clock-o"
  | "road"
  | "arrow-circle-o-down"
  | "arrow-circle-o-up"
  | "play-circle-o"
  | "rotate-right"
  | "list-alt"
  | "volume-off"
  | "volume-down"
  | "volume-up"
  | "font"
  | "text-height"
  | "text-width"
  | "dedent"
  | "outdent"
  | "indent"
  | "photo"
  | "picture-o"
  | "map-marker"
  | "tint"
  | "pencil-square-o"
  | "share-square-o"
  | "check-square-o"
  | "arrows"
  | "step-backward"
  | "fast-backward"
  | "backward"
  | "stop"
  | "step-forward"
  | "eject"
  | "times-circle"
  | "question-circle"
  | "info-circle"
  | "crosshairs"
  | "times-circle-o"
  | "check-circle-o"
  | "ban"
  | "mail-forward"
  | "expand"
  | "compress"
  | "asterisk"
  | "exclamation-circle"
  | "fire"
  | "eye-slash"
  | "exclamation-triangle"
  | "plane"
  | "random"
  | "folder-open"
  | "arrows-v"
  | "arrows-h"
  | "bar-chart-o"
  | "twitter-square"
  | "camera-retro"
  | "gears"
  | "cogs"
  | "comments"
  | "thumbs-o-up"
  | "thumbs-o-down"
  | "star-half"
  | "heart-o"
  | "sign-out"
  | "thumb-tack"
  | "sign-in"
  | "github-square"
  | "lemon-o"
  | "square-o"
  | "bookmark-o"
  | "phone-square"
  | "facebook-f"
  | "feed"
  | "hdd-o"
  | "bullhorn"
  | "certificate"
  | "hand-o-right"
  | "hand-o-left"
  | "hand-o-up"
  | "hand-o-down"
  | "arrow-circle-left"
  | "arrow-circle-right"
  | "arrow-circle-up"
  | "arrow-circle-down"
  | "wrench"
  | "tasks"
  | "arrows-alt"
  | "group"
  | "chain"
  | "flask"
  | "cut"
  | "files-o"
  | "floppy-o"
  | "reorder"
  | "list-ul"
  | "list-ol"
  | "strikethrough"
  | "magic"
  | "pinterest-square"
  | "google-plus-square"
  | "google-plus"
  | "money"
  | "caret-down"
  | "caret-up"
  | "caret-left"
  | "caret-right"
  | "unsorted"
  | "sort"
  | "sort-down"
  | "sort-desc"
  | "sort-up"
  | "sort-asc"
  | "rotate-left"
  | "legal"
  | "gavel"
  | "tachometer"
  | "comment-o"
  | "comments-o"
  | "bolt"
  | "sitemap"
  | "paste"
  | "lightbulb-o"
  | "exchange"
  | "cloud-download"
  | "cloud-upload"
  | "user-md"
  | "stethoscope"
  | "bell-o"
  | "cutlery"
  | "file-text-o"
  | "building-o"
  | "hospital-o"
  | "ambulance"
  | "medkit"
  | "fighter-jet"
  | "beer"
  | "h-square"
  | "angle-double-left"
  | "angle-double-right"
  | "angle-double-up"
  | "angle-double-down"
  | "angle-left"
  | "angle-right"
  | "angle-up"
  | "angle-down"
  | "desktop"
  | "mobile-phone"
  | "circle-o"
  | "quote-left"
  | "quote-right"
  | "mail-reply"
  | "github-alt"
  | "folder-o"
  | "folder-open-o"
  | "smile-o"
  | "frown-o"
  | "meh-o"
  | "gamepad"
  | "keyboard-o"
  | "flag-o"
  | "flag-checkered"
  | "mail-reply-all"
  | "star-half-empty"
  | "star-half-full"
  | "star-half-o"
  | "location-arrow"
  | "code-fork"
  | "unlink"
  | "chain-broken"
  | "superscript"
  | "subscript"
  | "puzzle-piece"
  | "microphone"
  | "microphone-slash"
  | "calendar-o"
  | "fire-extinguisher"
  | "maxcdn"
  | "chevron-circle-left"
  | "chevron-circle-right"
  | "chevron-circle-up"
  | "chevron-circle-down"
  | "html5"
  | "css3"
  | "unlock-alt"
  | "bullseye"
  | "ellipsis-h"
  | "ellipsis-v"
  | "rss-square"
  | "minus-square-o"
  | "pencil-square"
  | "external-link-square"
  | "share-square"
  | "toggle-down"
  | "caret-square-o-down"
  | "toggle-up"
  | "caret-square-o-up"
  | "caret-square-o-right"
  | "euro"
  | "eur"
  | "gbp"
  | "dollar"
  | "usd"
  | "rupee"
  | "inr"
  | "cny"
  | "rmb"
  | "yen"
  | "jpy"
  | "ruble"
  | "rouble"
  | "rub"
  | "won"
  | "krw"
  | "bitcoin"
  | "btc"
  | "sort-alpha-asc"
  | "sort-alpha-desc"
  | "sort-amount-asc"
  | "sort-amount-desc"
  | "sort-numeric-asc"
  | "sort-numeric-desc"
  | "youtube-square"
  | "xing-square"
  | "youtube-play"
  | "stack-overflow"
  | "adn"
  | "bitbucket"
  | "bitbucket-square"
  | "tumblr-square"
  | "long-arrow-down"
  | "long-arrow-up"
  | "long-arrow-left"
  | "long-arrow-right"
  | "apple"
  | "linux"
  | "female"
  | "male"
  | "gittip"
  | "gratipay"
  | "sun-o"
  | "moon-o"
  | "pagelines"
  | "stack-exchange"
  | "arrow-circle-o-right"
  | "arrow-circle-o-left"
  | "caret-square-o-left"
  | "dot-circle-o"
  | "wheelchair"
  | "vimeo-square"
  | "turkish-lira"
  | "try"
  | "plus-square-o"
  | "space-shuttle"
  | "envelope-square"
  | "wordpress"
  | "openid"
  | "institution"
  | "university"
  | "mortar-board"
  | "yahoo"
  | "reddit"
  | "reddit-square"
  | "stumbleupon-circle"
  | "delicious"
  | "digg"
  | "pied-piper-pp"
  | "pied-piper-alt"
  | "drupal"
  | "joomla"
  | "fax"
  | "building"
  | "child"
  | "paw"
  | "spoon"
  | "cube"
  | "cubes"
  | "steam"
  | "steam-square"
  | "recycle"
  | "automobile"
  | "cab"
  | "taxi"
  | "deviantart"
  | "file-pdf-o"
  | "file-word-o"
  | "file-excel-o"
  | "file-powerpoint-o"
  | "file-photo-o"
  | "file-picture-o"
  | "file-image-o"
  | "file-zip-o"
  | "file-archive-o"
  | "file-sound-o"
  | "file-audio-o"
  | "file-movie-o"
  | "file-video-o"
  | "file-code-o"
  | "jsfiddle"
  | "life-bouy"
  | "life-saver"
  | "support"
  | "life-ring"
  | "circle-o-notch"
  | "ra"
  | "resistance"
  | "rebel"
  | "ge"
  | "empire"
  | "git-square"
  | "git"
  | "y-combinator-square"
  | "yc-square"
  | "hacker-news"
  | "tencent-weibo"
  | "weixin"
  | "send-o"
  | "paper-plane-o"
  | "history"
  | "circle-thin"
  | "paragraph"
  | "share-alt"
  | "share-alt-square"
  | "bomb"
  | "soccer-ball-o"
  | "futbol-o"
  | "tty"
  | "binoculars"
  | "plug"
  | "newspaper-o"
  | "google-wallet"
  | "cc-visa"
  | "cc-mastercard"
  | "cc-discover"
  | "cc-amex"
  | "cc-paypal"
  | "cc-stripe"
  | "bell-slash"
  | "bell-slash-o"
  | "at"
  | "eyedropper"
  | "paint-brush"
  | "birthday-cake"
  | "area-chart"
  | "line-chart"
  | "lastfm-square"
  | "toggle-off"
  | "toggle-on"
  | "bicycle"
  | "bus"
  | "ioxhost"
  | "angellist"
  | "cc"
  | "shekel"
  | "sheqel"
  | "ils"
  | "meanpath"
  | "buysellads"
  | "connectdevelop"
  | "dashcube"
  | "forumbee"
  | "leanpub"
  | "sellsy"
  | "shirtsinbulk"
  | "simplybuilt"
  | "skyatlas"
  | "cart-plus"
  | "cart-arrow-down"
  | "diamond"
  | "ship"
  | "user-secret"
  | "motorcycle"
  | "street-view"
  | "heartbeat"
  | "venus"
  | "mars"
  | "mercury"
  | "intersex"
  | "transgender"
  | "transgender-alt"
  | "venus-double"
  | "mars-double"
  | "venus-mars"
  | "mars-stroke"
  | "mars-stroke-v"
  | "mars-stroke-h"
  | "neuter"
  | "genderless"
  | "facebook-official"
  | "pinterest-p"
  | "whatsapp"
  | "user-times"
  | "hotel"
  | "bed"
  | "viacoin"
  | "train"
  | "subway"
  | "yc"
  | "y-combinator"
  | "optin-monster"
  | "opencart"
  | "expeditedssl"
  | "battery-4"
  | "battery-full"
  | "battery-3"
  | "battery-three-quarters"
  | "battery-2"
  | "battery-half"
  | "battery-1"
  | "battery-quarter"
  | "battery-0"
  | "battery-empty"
  | "i-cursor"
  | "object-group"
  | "object-ungroup"
  | "sticky-note"
  | "sticky-note-o"
  | "cc-jcb"
  | "cc-diners-club"
  | "clone"
  | "balance-scale"
  | "hourglass-o"
  | "hourglass-1"
  | "hourglass-start"
  | "hourglass-2"
  | "hourglass-half"
  | "hourglass-3"
  | "hourglass-end"
  | "hand-grab-o"
  | "hand-rock-o"
  | "hand-stop-o"
  | "hand-paper-o"
  | "hand-scissors-o"
  | "hand-lizard-o"
  | "hand-spock-o"
  | "hand-pointer-o"
  | "hand-peace-o"
  | "registered"
  | "gg"
  | "gg-circle"
  | "odnoklassniki"
  | "odnoklassniki-square"
  | "get-pocket"
  | "wikipedia-w"
  | "safari"
  | "firefox"
  | "opera"
  | "internet-explorer"
  | "television"
  | "contao"
  | "calendar-plus-o"
  | "calendar-minus-o"
  | "calendar-times-o"
  | "calendar-check-o"
  | "industry"
  | "map-signs"
  | "map-o"
  | "commenting"
  | "commenting-o"
  | "black-tie"
  | "fonticons"
  | "reddit-alien"
  | "edge"
  | "credit-card-alt"
  | "codiepie"
  | "modx"
  | "fort-awesome"
  | "usb"
  | "product-hunt"
  | "mixcloud"
  | "pause-circle-o"
  | "stop-circle-o"
  | "hashtag"
  | "bluetooth-b"
  | "wpbeginner"
  | "wpforms"
  | "envira"
  | "universal-access"
  | "wheelchair-alt"
  | "question-circle-o"
  | "blind"
  | "audio-description"
  | "volume-control-phone"
  | "braille"
  | "assistive-listening-systems"
  | "asl-interpreting"
  | "american-sign-language-interpreting"
  | "deafness"
  | "hard-of-hearing"
  | "deaf"
  | "glide"
  | "glide-g"
  | "signing"
  | "sign-language"
  | "low-vision"
  | "viadeo"
  | "viadeo-square"
  | "snapchat"
  | "snapchat-ghost"
  | "snapchat-square"
  | "pied-piper"
  | "first-order"
  | "yoast"
  | "themeisle"
  | "google-plus-circle"
  | "google-plus-official"
  | "fa"
  | "font-awesome"
  | "handshake-o"
  | "envelope-open"
  | "envelope-open-o"
  | "linode"
  | "address-book"
  | "address-book-o"
  | "vcard"
  | "address-card"
  | "vcard-o"
  | "address-card-o"
  | "user-circle"
  | "user-circle-o"
  | "user-o"
  | "id-badge"
  | "drivers-license"
  | "id-card"
  | "drivers-license-o"
  | "id-card-o"
  | "quora"
  | "free-code-camp"
  | "telegram"
  | "thermometer-4"
  | "thermometer-full"
  | "thermometer-3"
  | "thermometer-three-quarters"
  | "thermometer-2"
  | "thermometer-half"
  | "thermometer-1"
  | "thermometer-quarter"
  | "thermometer-0"
  | "thermometer-empty"
  | "shower"
  | "bathtub"
  | "s15"
  | "bath"
  | "podcast"
  | "window-maximize"
  | "window-minimize"
  | "window-restore"
  | "times-rectangle"
  | "window-close"
  | "times-rectangle-o"
  | "window-close-o"
  | "bandcamp"
  | "grav"
  | "etsy"
  | "imdb"
  | "ravelry"
  | "eercast"
  | "microchip"
  | "snowflake-o"
  | "superpowers"
  | "wpexplorer"
  | "meetup"
>;

export type IconButtonProps = PressableProps & {
  name: IconAttrs["name"];
  size?: IconAttrs["size"];
  buttonStyles?: StyleProp<ViewStyle>;
};

export const IconButton = ({
  name,
  size = 32,
  buttonStyles,
  ...pressableProps
}: IconButtonProps) => {
  return (
    <Pressable
      {...pressableProps}
      style={({ pressed }) => [
        pressableProps.disabled && styles.disabled,
        pressed && styles.pressed,
        buttonStyles,
      ]}
    >
      <FontAwesome size={size} name={name} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  disabled: {
    opacity: 0.6,
  },
  pressed: {
    transform: [{ scale: 0.9 }],
  },
});
