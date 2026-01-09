export const FEATURES_MAP = {
  ac: {
    label: "AC",
    icon: (
      <svg className="icon">
        <use href="/svg/svg_spit.svg#icon-ac" />
      </svg>
    ),
    value: "AC",
  },
  kitchen: {
    label: "Kitchen",
    icon: (
      <svg className="icon">
        <use href="/svg/svg_spit.svg#icon-cup" />
      </svg>
    ),
    value: "kitchen",
  },
  bathroom: {
    label: "Bathroom",
    icon: (
      <svg className="icon">
        <use href="/svg/svg_spit.svg#icon-bathroom" />
      </svg>
    ),
    value: "bathroom",
  },
  tv: {
    label: "TV",
    icon: (
      <svg className="icon">
        <use href="/svg/svg_spit.svg#icon-tv" />
      </svg>
    ),
    value: "TV",
  },
  automatic: {
    label: "Automatic",
    icon: (
      <svg className="icon">
        <use href="/svg/svg_spit.svg#icon-aitomatic" />
      </svg>
    ),
    value: "transmission",
  },
  van: {
    label: "Van",
    icon: (
      <svg className="icon">
        <use href="/svg/svg_spit.svg#icon-van" />
      </svg>
    ),
    value: "van",
  },
  fullyIntegrated: {
    label: "Fully Integrated",
    icon: (
      <svg className="icon">
        <use href="/svg/svg_spit.svg#icon-fully" />
      </svg>
    ),
    value: "fully-integrated",
  },
  alcove: {
    label: "Alcove",
    icon: (
      <svg className="icon">
        <use href="/svg/svg_spit.svg#icon-alcove" />
      </svg>
    ),
    value: "alcove",
  },
  fridge: {
    label: "Fridge",
    icon: (
      <svg className="icon">
        <use href="/svg/svg_spit.svg#icon-fridge" />
      </svg>
    ),
    value: "fridge",
  },
  petrol: {
    label: "Petrol",
    icon: (
      <svg className="icon">
        <use href="/svg/svg_spit.svg#icon-petrol" />
      </svg>
    ),
    value: "petrol",
  },
  radio: {
    label: "Radio",
    icon: (
      <svg className="icon">
        <use href="/svg/svg_spit.svg#icon-radio" />
      </svg>
    ),
    value: "radio",
  },
  water: {
    label: "Water",
    icon: (
      <svg className="icon">
        <use href="/svg/svg_spit.svg#icon-water" />
      </svg>
    ),
    value: "water",
  },
  gas: {
    label: "Gas",
    icon: (
      <svg className="icon">
        <use href="/svg/svg_spit.svg#icon-gas" />
      </svg>
    ),
    value: "gas",
  },
  microwave: {
    label: "Microwave",
    icon: (
      <svg className="icon">
        <use href="/svg/svg_spit.svg#icon-microwave" />
      </svg>
    ),
    value: "microwave",
  },
} as const;

export type FeatureKey = keyof typeof FEATURES_MAP;
