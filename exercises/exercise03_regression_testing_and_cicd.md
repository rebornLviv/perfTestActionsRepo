## Performance testing
Exercises with trainer:
1. Analyze configuration of Reassure and `reassure-tests.sh` file.
2. Check render of cart items `app/(tabs)/cart/items.tsx` component and try rewrite render to more optimal solution. after that, run `reassure-tests.sh` script and compare results wit previous solution.

Exercises without trainer:
1. Write performance test for `list` screen 
   * render component and simulate scroll on the list
2. Write first performance test for `AddToCartButton` component
   * check performance when user clicks 10 times on the increase button

## CI/CD configuration
Exercises with trainer:
1. Write a GithubAction configuration file with job that runs:
   * install dependencies
   * run lint & typecheck

Exercises without trainer:
1. Add to existed job command that runs existed tests
2. Add new job that runs performance tests (reassure-tests.sh script) and make sure that it perform properly.
3. Add another workflow that runs E2E tests (https://cloud.mobile.dev/ci-integration/github-actions)
   inspiration: https://blog.mobile.dev/pokedex-ui-testing-series-taking-maestro-to-the-cloud-with-expo-eas-github-actions-part-3-ff6257ddd173 
