# Structures

"Structures" are named intentionally because we think there's potential for them to manifest in a limitless amount of Types, Complexities, and Aesthetic Rarity.&#x20;

These Types include residential houses,  skyscrapers, libraries, churches, hospitals, universities and roads.&#x20;

## **Minimum Time Requirements to Build The Structure**

| Minimum FocusBuild Time | Category             | Examples                                      |
| ----------------------- | -------------------- | --------------------------------------------- |
| 20 minutes              | Small Structures     | roads, custom signs, street lights            |
| 45 minutes              | Medium Structures    | single story resident homes, small restaurant |
| 60 minutes              | Large Structures     | 2-3 story buildings, highways                 |
| > 90 minutes            | Very Large Structure | libraries, hospitals, 4+ story buildings,     |

**The Type of a Structure is determined by users based on its minimum time investment, but the Complexity and Rarity of the Structure that the Builder creates within the category is non-deterministic, resulting in a "loot-box," or variable reward. Distributions are parameterized by Builder Attributes, Time Modifier, and Bonuses from the City.** After a successful FocusBuild session, users can chose to spend Concentrate in order to select the specific structure they wanted within their Category.

Chose the type category. Minimum amount of time you take to .&#x20;

e.g. if you chose to build a road the minimum is 20 minutes. but if you decide to invest 1 hour into your road then it is more "complex"

## Structure Attributes

* Style - what aesthetic (culture, time period)
* Rarity - likelihood of creating a specific quality of structure (beauty and detail, quality)
  * Rarity = .9 \* Builder Rarity + +1 \* Time Modifier
* Complexity - Size and Magnitude
  * Complexity = .9 \* Time Modifier + .1 \* Builder Rarity

If you have a rarer Builder, it increases the chances that the Structure made will be more detailed and higher quality. But if you have more time then this changes the size

### &#x20;Time Modifier = Your Timer / Minimum Time&#x20;

* This Time Modifier is a ratio that contributes to the Rarity and Complexity of the Selected Structure.
* e.g. Road has a base time cost of 20 minutes. Library has a base time cost of 90 minutes. If I spend 20 minutes on a road, and 90 minutes on a library, they will have a Time Modifier of 1 and share the same Rarity | Complexity Table. But If you spend 40 minutes on a road you will get a more complex and rare road. If you spend 180 minutes on a library, you will get a more complex and rare library.

<img src="../.gitbook/assets/noun-4267809(1) (1).png" alt="" data-size="original">![](<../.gitbook/assets/noun-3222595(1) (2).png>)

![](../.gitbook/assets/noun-3222580.png)![](../.gitbook/assets/noun-3222571\(1\).png)

****![](../.gitbook/assets/noun-3222672.png)****![](<../.gitbook/assets/noun-2094541 (1).png>)****



### **Scalable generation of Structure Assets**

It is a high priority for individual structures to be visually beautiful yet unique, desirable as standalone art, in order to not only keep players engaged by the building process and also have intrinsic economic value for trading purposes.  In order to accomplish this at large scale, we are exploring recent advances in generative machine learning to create structure assets.  In particular, stable diffusion networks have been highly successful in generating 2D art conditioned on text specifications and recent publications have demonstrated its efficacy for 3D modeling as well.  We intend to train or fine tune such a model to convert a structure's parametrizing attributes (structure type, style, rarity, and complexity) to a 3D model.

This would also allow us to explicitly and objectively encode definitions of rarity and complexity by, for instance, training a separate model with larger/deeper hidden layers for the higher rarities and complexities.
