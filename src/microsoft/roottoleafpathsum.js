/**
 * Root to leaf path sum
 * 
 * Given a binary tree and an integer S, check whether there is root to leaf path wiht its sum as S.

Example 1:

Input:
Tree = 
            1
          /   \
        2      3
S = 2

Output: 0

Explanation:
There is no root to leaf path with sum 2.
Example 2:

Input:
Tree = 
            1
          /   \
        2      3
S = 4

Output: 1

Explanation:
The sum of path from leaf node 3 to root 1 is 4.

Your Task:  
You dont need to read input or print anything. Complete the function hasPathSum() which takes root node and target sum S as input parameter and returns true if path exists otherwise it returns false.


Expected Time Complexity: O(N)
Expected Auxiliary Space: O(height of tree)

Constraints:
1 ≤ N ≤ 10^4
1 ≤ S ≤ 10^6
 * 
 https://www.geeksforgeeks.org/root-to-leaf-path-sum-equal-to-a-given-number/
 */

/**
 * Checking whether path in the tree has path with defined sum recursively
 * Idea is to get the difference left and pass that on till we get it 0 and that too on the Leaf level.
 * @param {*} root
 * @param {*} sum
 */
function hasPathSum(root, sum) {
  if (root == null) {
    return false;
  }
  let isTherePathWithDesiredSum = false;

  let subsum = sum - root.val;
  if (subsum == 0 && root.left == null && root.right == null) {
    //base condition
    return true;
  }
  if (root.left != null) {
    //check for the left tree
    isTherePathWithDesiredSum =
      isTherePathWithDesiredSum || hasPathSum(root.left, subsum);
  }
  if (root.right != null) {
    //check for the right tree
    isTherePathWithDesiredSum =
      isTherePathWithDesiredSum || hasPathSum(root.right, subsum);
  }
  return isTherePathWithDesiredSum;
}

/**
 * Second approach could be thought of without recursion using Stack and tree traversal.
 */
