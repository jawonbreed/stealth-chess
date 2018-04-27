/**
 * Represents the result of a RuleService.tryMove().
 *
 * Contains a success boolean and a list of reasons why the move may have failed.
 */
export class MoveResult {

  readonly success: boolean;
  readonly reasons: string[];

  constructor(success: boolean, reasons: string[]) {
    this.success = success;
    this.reasons = reasons;

    if (!success && reasons.length === 0) {
      throw new Error("must contain reasons why the move was not successful");
    }
  }
}
