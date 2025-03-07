export interface EVENT_TYPES {
  /**
   * 滚动表格事件
   */
  SCROLL: 'scroll';
  /**
   * 改变日期范围事件
   */
  CHANGE_DATE_RANGE: 'change_date_range';
  /**
   * 点击任务条事件
   */
  CLICK_TASK_BAR: 'click_task_bar';
  /**
   * 鼠标移入任务条事件
   */
  MOUSEENTER_TASK_BAR: 'mouseenter_task_bar';
  /**
   * 鼠标移出任务条事件
   */
  MOUSELEAVE_TASK_BAR: 'mouseleave_task_bar';
}
/**
 * Table event types
 */
export const GANTT_EVENT_TYPE: EVENT_TYPES = {
  SCROLL: 'scroll',
  CHANGE_DATE_RANGE: 'change_date_range',
  CLICK_TASK_BAR: 'click_task_bar',
  MOUSEENTER_TASK_BAR: 'mouseenter_task_bar',
  MOUSELEAVE_TASK_BAR: 'mouseleave_task_bar'
} as EVENT_TYPES;
