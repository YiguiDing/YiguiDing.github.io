import { SchedulableClock, TimerHandle, Loop } from "../types";

/**
 * The first tick is after `1000 / frameRate` ms.
 *
 * @param clock Clock used to control the loop.
 * @param frameRate Ticks per second
 * @param onTick
 * @return {Loop}
 */
export function startLoop(
  clock: SchedulableClock,
  frameRate: number,
  onTick: () => any
): Loop {
  const startTime: number = clock.getTime();
  let oldTime: number = startTime;
  let shift: number = 0;
  let nextTickCount: number = 0;
  let handle: TimerHandle | undefined = undefined;

  function handleTick(): void {
    onTick();
    scheduleNextTick();
  }

  function scheduleNextTick(): void {
    const curTime: number = clock.getTime();
    if (nextTickCount > 0 && curTime === oldTime) {
      // tslint:disable-next-line:max-line-length
      const infoUri: string =
        "https://developer.mozilla.org/en-US/docs/Web/API/DOMHighResTimeStamp#Reduced_time_precision";
      console.warn(
        `\`curTime === oldTime\`, possible reduced time precision, see ${infoUri}`
      );
    }
    oldTime = curTime;
    // console.log(clock.getTime());
    nextTickCount++;
    const targetTime: number =
      startTime + shift + (1000 * nextTickCount) / frameRate;
    let timeout: number = targetTime - clock.getTime();
    if (timeout < 0) {
      shift += -timeout;
      console.warn(`Unable to maintain frameRate (missed by ${-timeout}ms)`);
      timeout = 0;
    }
    handle = clock.setTimeout(timeout, handleTick);
  }

  scheduleNextTick();

  function destroy(): void {
    if (handle !== undefined) {
      clock.clearTimeout(handle);
      handle = undefined;
    }
  }

  return { destroy };
}
