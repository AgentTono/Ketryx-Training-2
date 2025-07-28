---
itemId: tc-1
itemType: Test Case
itemTests: KXITM03H0XEZ55F91Y91BBSYD3J7G9A
---

# Test infusion limitations

This test is to ensure that attempts to deliver more than the defined maximum insulin dosage are not exceeded.

## Steps

1. Open iOS application
2. Enter insulin dosage of 10 (above 1)
3. Submit

## Expected behavior

Insulin dose is not administered, and an error/warning message appears in the application telling users the maximum defined dosage
