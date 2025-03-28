import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

data = {
    "Framework": ["Proposed\nApproach", "Next.js", "Hapi.js", "Express.js", "Koa", "Nest.js"],
    "Files": [10, 8, 10, 14, 14, 10],
    "Lines of Code": [153, 461, 96, 96, 93, 140],
    "Folder Size (MB)": [229.7, 451, 2.1, 229.7, 230.8, 298],
    "Performance (ms)": [34.10, 38.66, 37.20, 38.97, 38.12, 41.82]
}

df = pd.DataFrame(data)

plt.rcParams.update({
    "font.family": "serif",
    "font.size": 18,
    "text.usetex": False,
    "axes.titlesize": 16,
    "axes.labelsize": 16,
    "xtick.labelsize": 14,
    "ytick.labelsize": 14
})

sns.set(style="whitegrid", font_scale=1.1)

metrics = ["Files", "Lines of Code", "Folder Size (MB)", "Performance (ms)"]

fig, axes = plt.subplots(2, 2, figsize=(16, 12))
axes = axes.flatten()

for i, metric in enumerate(metrics):
    ax = axes[i]
    sns.barplot(x="Framework", y=metric, data=df, palette="viridis", ax=ax, width=0.8)
    for p in ax.patches:
        x = p.get_x() + p.get_width() / 2
        y = p.get_height()
        if metric == "Performance (ms)":
            ax.text(x, y - (y * 0.05), f'{y:.2f}', ha='center', va='top', fontsize=14, color='white', rotation=0)
        else:
            ax.text(x, y - (y * 0.05), f'{y:.0f}', ha='center', va='top', fontsize=14, color='white', rotation=0)
    ax.set_title(f"Comparison of Frameworks by {metric}")
    ax.set_ylabel(metric)
    ax.set_xlabel("Framework")
    ax.tick_params(axis='x', rotation=0)

plt.tight_layout()
plt.savefig("bar_plot.png", dpi=300, bbox_inches='tight')