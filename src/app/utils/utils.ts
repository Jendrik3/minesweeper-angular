export function assertIsSet(value: null | undefined): never;
export function assertIsSet(value: any): void;

export function assertIsSet(value: any) {
	if (value === null || value === undefined) {
		throw new Error(`${value} should be non-null`);
	}
}
