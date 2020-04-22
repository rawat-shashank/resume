import {
  trigger,
  transition,
  query,
  style,
  group,
  animate,
} from "@angular/animations";

const left = [
  query(":enter, :leave", style({ position: "fixed", width: "60%" }), {
    optional: true,
  }),
  group([
    query(
      ":enter",
      [
        style({ transform: "translateX(-200%)" }),
        animate(".65s ease-out", style({ transform: "translateX(0%)" })),
      ],
      {
        optional: true,
      }
    ),
    query(
      ":leave",
      [
        style({ transform: "translateX(0%)" }),
        animate(".65s ease-out", style({ transform: "translateX(160%)" })),
      ],
      {
        optional: true,
      }
    ),
  ]),
];

const right = [
  query(":enter, :leave", style({ position: "fixed", width: "60%" }), {
    optional: true,
  }),
  group([
    query(
      ":enter",
      [
        style({ transform: "translateX(200%)" }),
        animate(".65s ease-out", style({ transform: "translateX(0%)" })),
      ],
      {
        optional: true,
      }
    ),
    query(
      ":leave",
      [
        style({ transform: "translateX(0%)" }),
        animate(".65s ease-out", style({ transform: "translateX(-160%)" })),
      ],
      {
        optional: true,
      }
    ),
  ]),
];

export const slide = trigger("routeAnimations", [
  transition(":increment", right),
  transition(":decrement", left),
]);
