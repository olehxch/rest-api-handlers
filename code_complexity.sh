# Proposed Approach
uv run lizard proposed-approach > ./proposed-approach/code_complexity.txt
uv run lizard --html proposed-approach > ./proposed-approach/code_complexity.html
echo "Done with proposed approach"

# Express
uv run lizard frameworks/express > ./frameworks/express/code_complexity.txt
uv run lizard --html frameworks/express > ./frameworks/express/code_complexity.html
echo "Done with Express"

# Hapi
uv run lizard frameworks/hapi > ./frameworks/hapi/code_complexity.txt
uv run lizard --html frameworks/hapi > ./frameworks/hapi/code_complexity.html
echo "Done with Hapi"

# Koa
uv run lizard frameworks/koa > ./frameworks/koa/code_complexity.txt
uv run lizard --html frameworks/koa > ./frameworks/koa/code_complexity.html
echo "Done with Koa"

# NestJS
uv run lizard frameworks/nest > ./frameworks/nest/code_complexity.txt
uv run lizard --html frameworks/nest > ./frameworks/nest/code_complexity.html
echo "Done with NestJS"

# NextJS
uv run lizard frameworks/next > ./frameworks/next/code_complexity.txt
uv run lizard --html frameworks/next > ./frameworks/next/code_complexity.html
echo "Done with NextJS"
