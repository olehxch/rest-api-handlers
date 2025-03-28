import matplotlib.pyplot as plt
import pandas as pd
from adjustText import adjust_text  # Import adjustText

# Re-create the DataFrame
data = {
    "Framework": ["Proposed Approach", "Next.js", "Hapi.js", "Express.js", "Koa", "Nest.js"],
    "Files": [10, 8, 10, 14, 14, 10],
    "Lines of Code": [153, 461, 96, 96, 93, 140],
    "Folder Size (MB)": [229.7, 451, 2.1, 229.7, 230.8, 298],
    "Performance (ms)": [34.10, 38.66, 37.20, 38.97, 38.12, 41.82]
}
df = pd.DataFrame(data)

plt.rcParams.update({
    "font.family": "serif",
    "font.size": 12,
    "xtick.major.pad": 10,
    "ytick.major.pad": 10
})

fig, axs = plt.subplots(2, 2, figsize=(14, 10))

# Files vs Lines of Code
axs[0, 0].scatter(df["Files"], df["Lines of Code"], color='red')
texts_0_0 = []
for i, txt in enumerate(df["Framework"]):
    texts_0_0.append(axs[0, 0].annotate(txt, (df["Files"][i], df["Lines of Code"][i]), fontsize=13))
adjust_text(texts_0_0, ax=axs[0, 0], arrowprops=dict(arrowstyle='-', color='grey'))
axs[0, 0].set_title("Files vs Lines of Code", fontsize=15)
axs[0, 0].set_xlabel("Number of Files", fontsize=13)
axs[0, 0].set_ylabel("Total Lines of Code", fontsize=13)
axs[0, 0].grid(True, color='lightgrey', linestyle='--', linewidth=0.5)

# Files vs Folder Size
axs[0, 1].scatter(df["Files"], df["Folder Size (MB)"], color='red')
texts_0_1 = []
for i, txt in enumerate(df["Framework"]):
    texts_0_1.append(axs[0, 1].annotate(txt, (df["Files"][i], df["Folder Size (MB)"][i]), fontsize=13))
adjust_text(texts_0_1, ax=axs[0, 1], arrowprops=dict(arrowstyle='-', color='grey'))
axs[0, 1].set_title("Files vs Folder Size", fontsize=15)
axs[0, 1].set_xlabel("Number of Files", fontsize=13)
axs[0, 1].set_ylabel("Folder Size (MB)", fontsize=13)
axs[0, 1].grid(True, color='lightgrey', linestyle='--', linewidth=0.5)

# Lines of Code vs Folder Size
axs[1, 0].scatter(df["Lines of Code"], df["Folder Size (MB)"], color='red')
texts_1_0 = []
for i, txt in enumerate(df["Framework"]):
    texts_1_0.append(axs[1, 0].annotate(txt, (df["Lines of Code"][i], df["Folder Size (MB)"][i]), fontsize=13))
adjust_text(texts_1_0, ax=axs[1, 0], arrowprops=dict(arrowstyle='-', color='grey'))
axs[1, 0].set_title("Lines of Code vs Folder Size", fontsize=15)
axs[1, 0].set_xlabel("Total Lines of Code", fontsize=13)
axs[1, 0].set_ylabel("Folder Size (MB)", fontsize=13)
axs[1, 0].grid(True, color='lightgrey', linestyle='--', linewidth=0.5)

# Folder Size vs Performance
axs[1, 1].scatter(df["Folder Size (MB)"], df["Performance (ms)"], color='red')
texts_1_1 = []
for i, txt in enumerate(df["Framework"]):
    texts_1_1.append(axs[1, 1].annotate(txt, (df["Folder Size (MB)"][i], df["Performance (ms)"][i]), fontsize=13))
adjust_text(texts_1_1, ax=axs[1, 1], arrowprops=dict(arrowstyle='-', color='grey'))
axs[1, 1].set_title("Folder Size vs Performance", fontsize=15)
axs[1, 1].set_xlabel("Folder Size (MB)", fontsize=13)
axs[1, 1].set_ylabel("Response Time (ms)", fontsize=13)
axs[1, 1].grid(True, color='lightgrey', linestyle='--', linewidth=0.5)

plt.suptitle("Comparative Scatter Plots of Framework Complexity and Metrics", fontsize=20)
plt.tight_layout(rect=[0, 0, 1, 0.96])
plt.savefig("scatter_plot.png", dpi=300)
# plt.show()