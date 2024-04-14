export default class Result<T> {
    public readonly isSuccess: boolean;
    public readonly isFailure: boolean;
    public readonly error: string | null;
    private readonly _value: T | null;

    private constructor(isSuccess: boolean, error: string | null = null, value: T | null = null) {
        if (isSuccess && error) {
            throw new Error(`InvalidOperation: A result cannot be successful and contain an error`);
        }
        if (!isSuccess && !error) {
            throw new Error(`InvalidOperation: A failing result needs to contain an error message`);
        }

        this.isSuccess = isSuccess;
        this.isFailure = !isSuccess;
        this.error = error;
        this._value = value;

        Object.freeze(this);
    }

    public static ok<U>(value: U): Result<U> {
        return new Result<U>(true, null, value);
    }

    public static fail<U>(error: string): Result<U> {
        return new Result<U>(false, error);
    }
}
