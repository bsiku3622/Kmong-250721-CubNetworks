import clsx from "clsx";

type BreakpointLevel = "desktop" | "laptop" | "tablet";
type BreakpointType = "after" | "before";

const LineBreakWithSpacing = ({
  type,
  level,
}: {
  type: BreakpointType;
  level: BreakpointLevel;
}) => (
  <>
    <br
      className={clsx(
        type == "after" ? `${level}:inline hidden` : `${level}:hidden inline`
      )}
    />
    <span
      className={clsx(
        type == "after" ? `${level}:hidden inline` : `${level}:inline hidden`
      )}>
      &nbsp;
    </span>
  </>
);

const Spacing = ({
  type,
  level,
}: {
  type: BreakpointType;
  level: BreakpointLevel;
}) => (
  <span
    className={clsx(
      type == "after" ? `${level}:inline hidden` : `${level}:hidden inline`
    )}>
    &nbsp;
  </span>
);

export { LineBreakWithSpacing, Spacing };
